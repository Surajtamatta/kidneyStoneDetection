/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  useState } from 'react';
import { message } from 'antd';
import { Container, Images, Content,  Input, Button,Loader,TextContainer ,Wrapper} from '../../styles/components/UploadFIle';
import Spinner from '../Spinner';
import AnimatedText from 'animation/text'
import Increaseanimation from 'animation/increasecomp';
interface UploadFileProps {
  items: any;
}

const UploadFile: React.FC<UploadFileProps> = ({ items }) => {
 

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [imageprocess, setImageprocess] = useState<string[] | undefined>(undefined);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [classify,setClassify] = useState<string | undefined>(undefined)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await fetch('/api/upload_image', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        const image = data.data;
        setImageUrl(image);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      message.error('Error uploading file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePreprocess = async () => {
    if (!imageUrl) {
      console.log('No file uploaded');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/image_preprocess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageUrl }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const { processedImage } = data;
        setImageprocess(processedImage);
        setButtonClicked(true);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error while preprocessing image', error);
      message.error('Error while preprocessing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClassify = async () => {
    if (!imageUrl) {
      console.log('No file uploaded');
      return;
    }
    try {
      setLoader(true);
      const response = await fetch('/api/classification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageUrl }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const { classify } = data;
        setClassify(classify);
        setButtonClicked(true);
        
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error while classification image', error);
      message.error('Error while classification image. Please try again.');
    } finally {
      setLoader(false);
    }
  };
const handleClear=()=>{
  setImageUrl(undefined)
  setImageprocess(undefined)
  setClassify(undefined)
  setButtonClicked(false)
}
const text = (() => {
  switch(classify) {
    case 'Stone':
      return "In the following image, there are kidney stones.";
    case 'Cyst':
      return "In the following image, there are kidney cysts.";
    case 'Tumor':
      return "In the following image, there are kidney tumors.";
    case 'Normal':
      return "In the following image, everything appears normal.";
    default:
      return "In the following image, something is depicted.";
  }
})();

  return (
    <Container>
      <Content>
        {imageUrl 
        ? (<Spinner spin={loading}><Images src={`data:image/png;base64,${imageUrl}`} key={items.id} /></Spinner>) 
        : (<Spinner spin={loading}> <Input type="file" onChange={handleFileUpload} /> </Spinner>)
        }
        {imageprocess 
        && imageprocess.map((items,index)=>(
            <Spinner spin={loading} key={index}><Images src={`data:image/png;base64,${items}`} key={index}/></Spinner>
        ))}  
      </Content>
      
      <Wrapper layout='vertical'>
      {loader 
      ? <TextContainer><Loader/></TextContainer>
      :classify 
      ? <Increaseanimation><AnimatedText text={text}/></Increaseanimation> 
      :null
      }
      <Wrapper >
       {imageUrl && <Button onClick={handleClear}>Clear</Button>}
        {imageUrl && !buttonClicked && (<Button onClick={handlePreprocess}>Image Preprocessing</Button> )}
        { buttonClicked && (<Button onClick={handleClassify}>Classification</Button>) }

      </Wrapper> 
      </Wrapper>
    </Container>
    
  );
};

export default UploadFile;
