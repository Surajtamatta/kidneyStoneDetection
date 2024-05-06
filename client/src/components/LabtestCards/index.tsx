import React,{useState} from 'react'
import { CardData } from 'data/Data';
import {Modal } from 'antd';

import {
  Container,
  CardContainer,
  CardWrapper,
  WrapperContent,
  Title,
  Text,
  Wrapper,
  ImageContainer,
  WishListIcon,
  TestName,
  LabName,

  ShareIcon,
  BuyButton,
} from "../../styles/components/LabtestCards";
import CardInfoModels from '../CardInfoModels';
import SliderBanner from '../ImageSlider';
import { useLogin } from '@/utils/Context/login';
import Link from 'next/link';
import Precautions from '../Precautions';
import { sliderData } from '@/data/SliderData';




const LabtestCards = () => {

  const {loginState} = useLogin()
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedItem,setSelectedItem] = useState<number | null>(null)
  const [isprecaution,setIsprecaution] = useState<boolean >(false)
  const showModal = (index:number) => {
    setSelectedItem(index)
    setIsModalOpen(!isModalOpen);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null)
  };
  const showPrecautions = () => {
    setIsprecaution(!isprecaution)

  };
 
  return (
    <Container>
      <Title>
        <Text>Check it Out</Text>
      </Title>
      <CardContainer>  
        {CardData.map((items, index) =>(  
         
          
              <CardWrapper key={items.id}   >

                <ImageContainer >
                <ShareIcon/>
                <WishListIcon />
                 <SliderBanner sliderData={sliderData}/>
                </ImageContainer>

                <WrapperContent>
                <TestName>{items.testName}</TestName>
                <Wrapper>
          
                </Wrapper>
                <Wrapper>
                  
                  <LabName>{items.description}</LabName>
                </Wrapper>
                <WrapperContent>
                 
               
                {!loginState.isLoggedIn ? (
                  <Link href="/login" style={{width:'100%'}}>
                  <BuyButton type='primary'>Check</BuyButton>
                  </Link>
                  ):
                  <BuyButton type='primary' onClick={() => showModal(index)}>Check</BuyButton>
                  }
                  <BuyButton type='primary' onClick={()=>showPrecautions()}>Precautions</BuyButton>
                </WrapperContent>
                </WrapperContent>
              



                {selectedItem===index &&
                <Modal title={items.testName} open={isModalOpen} footer={false} onCancel={handleCancel} centered  width="auto"  >
                    <CardInfoModels items={items}/>
                </Modal>
                }
                {isprecaution &&
                <Modal title={'Precautions'}  open={isprecaution} footer={false} onCancel={showPrecautions} centered  width="auto"  >
                    <Precautions/>
                </Modal>
                }
              </CardWrapper>
              
            
           
          ))}
          
         
      </CardContainer>
    </Container>
  );
}

export default LabtestCards
