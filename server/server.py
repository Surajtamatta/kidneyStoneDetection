from flask import Flask, request,app, jsonify
import pickle
import numpy as np
import cv2
import base64
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import uuid
import base64
import tensorflow as tf
import sqlite3



svm_model = pickle.load(open('models/svm_model.pkl','rb'))
decision_model = pickle.load(open('models/decision_tree_model.pkl','rb'))
cnn_model= tf.keras.models.load_model('models/kidneystone.keras')



UPLOAD_FOLDER = 'images'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)


CORS(app,resources={r"/api/*": {"origins": "http://localhost:3000"}})
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def encoder(images):
    _, buffer = cv2.imencode('.png', images)
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    if img_base64 is None:
        raise ValueError("Failed to encode image")
    return img_base64
def decoder(images):
    image_bytes = base64.b64decode(images)
    nparr = np.frombuffer(image_bytes, np.uint8)
    img_decoded = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    if img_decoded is None:
        raise ValueError("Failed to decode image")
    return img_decoded


def preprocessImage(images):
    encoded_images = [] 
    try:
        img_decoded = decoder(images)
        resized_img = cv2.resize(img_decoded, (256, 256))
        equalized_img = cv2.equalizeHist(resized_img)
        blurred_img = cv2.GaussianBlur(equalized_img, (5, 5), 0)
        _, thresholded_img = cv2.threshold(blurred_img, 80, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(thresholded_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        filtered_contours = []
        for contour in contours:
            area = cv2.contourArea(contour)
            if area >= 1000:
                filtered_contours.append(contour)
        filtered_img = np.zeros_like(thresholded_img)
        cv2.drawContours(filtered_img, filtered_contours, -1, 255, thickness=cv2.FILLED)
        encode_img1 = encoder(filtered_img)
        encode_img2 = encoder(thresholded_img)
        encoded_images.append(encode_img1)
        encoded_images.append(encode_img2)     
        return encoded_images
    
    except Exception as e:
        print("Error preprocessing image:", e)
        return None



def Classification(filename):
    img_decoded = decoder(filename)
    img_rgb = cv2.cvtColor(img_decoded, cv2.COLOR_BGR2RGB)
    resized_img = cv2.resize(img_rgb, (256, 256))
    normalized_img = resized_img / 255.0
    class_labels = ['Cyst', 'Normal', 'Stone', 'Tumor']  
    cnn_predict = cnn_model.predict(np.expand_dims(normalized_img, 0))
    svm_predict =svm_model.predict(normalized_img.reshape(1, -1))
    decision_predict =decision_model.predict(normalized_img.reshape(1, -1))
    predicted_class_index = np.argmax(cnn_predict)
    predicted_label = class_labels[predicted_class_index]
    return predicted_label

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/api/upload_image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        res = jsonify({
            "message": "File is not uploaded",
            "status": "failed"
        })
        res.status_code = 400
        return res
    file = request.files['file']
    if file.filename == '':
        res = jsonify({
            "message": "No selected File",
            "status": "failed"
        })
        res.status_code = 400
        return res
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_id = str(uuid.uuid4())
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file_id + '_' + filename)
        file.save(filepath)
        img = cv2.imread(filepath)
        img_encode = cv2.imencode('.png', img)[1]
        img_str = base64.b64encode(img_encode).decode('utf-8')
        return jsonify({
            "message": "Image processed successfully",
            "status": "success",
            "data": img_str
        })
    else:
        res = jsonify({
            "message": "Error preprocessing image",
            "status": "failed"
        })
        res.status_code = 500
        return res

@app.route('/api/image_preprocess', methods=['POST'])
def image_preprocess():
    data = request.get_json()
    encoded_image = data.get('image')
   
    if not encoded_image:
        return jsonify({
            "message": "Base64 image data is missing", 
            "status": "failed"
            }), 400
    try:
        processed_image = preprocessImage(encoded_image)
        return jsonify({
            "message": "Image processed successfully", 
            "status": "success", 
            "processedImage": processed_image
            })
    except Exception as e:
        return jsonify({
            "message": "Error processing image", 
            "status": "failed", 
            "error": str(e)}), 500
   
@app.route('/api/classification', methods=['POST'])
def image_classify():
    data = request.get_json()
    encoded_image = data.get('image')

    if not encoded_image:
        return jsonify({
            "message": "Base64 image data is missing", 
            "status": "failed"
            }), 400
    try:
        classify_image = Classification(encoded_image)
        return jsonify({
            "message": "Image successfully classify", 
            "status": "success", 
            "classify": classify_image
            })
    except Exception as e:
        return jsonify({
            "message": "Error classifying image", 
            "status": "failed", 
            "error": str(e)}), 500


@app.route('/api/registration', methods=['POST'])
def registration():
    if request.method == 'POST':
        data = request.get_json()
        
        try:

            fullname = data.get('fullname')
            address = data.get('address')
            phone = data.get('phone')
            email = data.get('email')
            password = data.get('password')

            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO users (fullname, address, phone, email, password) VALUES (?,?,?,?,?)",
                            (fullname, address, phone, email, password))
                con.commit()
                msg = "Record successfully added to database"
        except Exception as e:
            con.rollback()
            msg = f"Error in the INSERT: {str(e)}"
            return jsonify({'msg': msg}), 500
        finally:
            con.close()
            return jsonify({'msg': msg})
    return jsonify({'msg': msg}), 405


@app.route('/api/login', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        try:
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("SELECT * FROM users WHERE email=?", (email,))
                user_data = cur.fetchone()

                if user_data and user_data[4] == password:  # Assuming password is at index 4
                    # Remove the password from the user data before sending it to the client
                    user_data_without_password = {
                        'fullname': user_data[0],
                        'address': user_data[1],
                        'email': user_data[2],
                        'phone': user_data[3],
                        # Include other user data fields here...
                    }
                    return jsonify({'success': True, 'message': 'Login successful', 'user_data': user_data_without_password})
                else:
                    return jsonify({'success': False, 'message': 'Invalid email or password'})
        except Exception as e:
            return jsonify({'message': f'Error logging in: {str(e)}'}), 500

    return jsonify({'message': 'Error logging in: Invalid request'}), 400



    


if __name__=="__main__":
    app.run(debug=True,port=8080)

