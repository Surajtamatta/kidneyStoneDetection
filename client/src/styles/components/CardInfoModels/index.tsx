import { styled } from "styled-components";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import{Carousel} from 'antd'
import { RiHeart3Line} from "react-icons/ri";
import Image from "next/image";
import {Button} from'antd'



export const Container=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
   min-width: 250px;
    padding: 10px;
    @media (max-width:700px) {
      padding: 0;
    flex-direction: column;

  }
    
`

export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    height: 100%;
    width: 100%;
   // gap: 20px;
`

export const Images = styled(Image)<{ src: string }>`
  background-image: url(${props => props.src}) ;
  background-size: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextArrow = styled(GoTriangleRight)`
  width: 100%;
  height: 100%;
  max-width: 20px;
  position: absolute;
  max-height: 35px;
  right:2px;
  border-radius: 8px 0 0 8px;
  z-index: 1;
  cursor: pointer;
  color: transparent;
  &:hover {
    color: rgb(7, 7, 7);
    background-color: #eff2f2cd;
  }
`;
export const PrevArrow = styled(GoTriangleLeft)`
  width: 100%;
  height: 100%;
  max-width: 20px;
  position: absolute;

  max-height: 35px;
  left: 2px;
  cursor: pointer;
  border-radius: 0 8px 8px 0;
  z-index: 1;
  color: transparent;
  &:hover {
    color: rgb(0, 0, 0);
    background-color: #eff2f2cd;
  }
`;

export const ImageContainer = styled(Carousel)`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;


export const WishListIcon = styled(RiHeart3Line)`
  padding: 10px;
  width: 100%;
  color: #cac7c7;
  height: 100%;
  max-height: 70px;
  max-width: 70px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: white;
  z-index: 1;
`;
// export const TestName = styled.h1`
//   color: #000000;
//   font-family: "Plus Jakarta Sans", Helvetica;
//   font-size: 25px;
//   font-weight: 600;
//   letter-spacing: 0.14px;
//   line-height: 24px;
//   width:100%;
// `;
// export const LabName = styled.h1`
//   color: #b5b5b5;
//   font-family: "Plus Jakarta Sans", Helvetica;
//   font-size: 20px;
//   font-weight: 400;
//   letter-spacing: 0.12px;
//   line-height: 24px;
//   text-align: right;
//   white-space: nowrap;
// `;


export const Content=styled.div`
    display: flex;
    justify-content:space-between;
    align-items:flex-end;
    height: 100%;
    width: 100%;
    gap: 20px;
`
export const LocateIcons = styled.div`
display: flex;
  justify-content: center;
  align-items:flex-end;
  display: inline-flex;
  color: #607eaa;
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 30px;
  margin-bottom: 8px;
 // margin-bottom: 5px;
  svg{
    margin-bottom: 8px;
    width: 100%;
    height: 100%;
    max-height: 30px;
    max-width: 30px;
  }
`;
// export const Price = styled.h1`
//   color: #607eaa;
//   font-family: "Plus Jakarta Sans", Helvetica;
//   font-size: 20px;
//   font-weight: 700;
//   letter-spacing: 0.12px;
//   line-height: 24px;
//   white-space: nowrap;
// `;


export const ModelButton = styled(Button)`
font-size: 20px;
height: 100%;
max-height: 60px;
padding: 8px;
width: 100%;
@media (max-width:600px) {
  padding: 5px;
  }
`;


export const ModelStyleIcon = styled(Button)`
  width: 100%;
  max-width: 100px;
  height: 100%;
  svg{
    width: 100%;
    height: 100%;
    max-height: 35px;
    max-width: 35px;
  }
  @media (max-width:600px) {
    max-width: 70px;
    svg{
    width: 100%;
    height: 100%;
    max-height: 30px;
    max-width: 30px;
  }
  }
`;
