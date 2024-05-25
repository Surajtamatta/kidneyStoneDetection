FROM python:3.11.9

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV UPLOAD_FOLDER=/usr/src/app/images
ENV ALLOWED_EXTENSIONS=png,jpg,jpeg
ENV DATABASE_URI=sqlite:///database/database.db

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --verbose --no-cache-dir -r requirements.txt
RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6 -y

# Copy the application code
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the application with Gunicorn
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8080", "app:app"]



