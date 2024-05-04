import { styled } from "styled-components";
import { RiHeart3Line} from "react-icons/ri";
import {FaShareAlt} from "react-icons/fa"
import Image from "next/image";
import {Button} from 'antd'

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    width: 100%;
    height: 100%;
    
`
export const Title = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content:flex-start;
`;
export const Text = styled.h1`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0;
  white-space: nowrap;
  font-family: Plus Jakarta Sans, Helvetica;
`;



export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: space-evenly;
  justify-items: center;
  grid-gap: 25px 16px;
  width: 100%;
  @media (max-width: 600px) {
    grid-gap: 8px 8px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
export const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  min-height: 100px;
  max-height: 450px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  @media (max-width: 600px) {
    padding: 8px;
    flex-direction: column;
    max-height: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const WrapperContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 300px;
gap: 10px;
@media (max-width: 600px) {
    max-width: none;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e9eb;
  border-radius: 8px;
  position: relative;
  min-height: 144px;
  @media (max-width: 600px) {
    min-height: 220px;
  }
`;
export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #e7e9eb;
  border-radius: 8px;
`;
export const ShareIcon = styled(FaShareAlt)`
  padding: 10px;
  width: 100%;
  color: #cac7c7;
  height: 100%;
  max-height: 44px;
  max-width: 44px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: white;
  z-index: 1;
`;
export const WishListIcon = styled(RiHeart3Line)`
  padding: 5px;
  width: 100%;
  color: #cac7c7;
  height: 100%;
  max-height: 44px;
  max-width: 44px;
  border-radius: 50%;
  position: absolute;
  right: 65px;
  top: 15px;
  background-color: white;
  z-index: 1;
`;
export const TestName = styled.h1`
  color: #000000;
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.14px;
  line-height: 24px;
  width:100%;
`;
export const LabName = styled.h1`
  color: #b5b5b5;
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 24px;
  text-indent: 50px;
  text-align: justify;

`;

export const Price = styled.h1`
  color: #607eaa;
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 24px;
`;


export const BuyButton = styled(Button)`
  width: 100%;
  height: 100%;
  max-height: 35px;
  /* max-width: 150px; */
  
`;
