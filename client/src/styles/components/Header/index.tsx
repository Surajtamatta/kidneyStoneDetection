import {
  styled
} from "styled-components";
import {FiSearch} from 'react-icons/fi'
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import {Button} from 'antd'
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 60px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows:55px;

  justify-content: flex-start;
  align-items: center;

  @media (max-width: 950px) {
    
  }
`;
export const SearchContainer=styled.div`
  width: 100%;
  height:100% ;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  gap: 15px;
`
export const SearchWrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  height: 100%;
  display: flex;
  gap: 10px;

`;
export const SearchIcon = styled(FiSearch)`
  width: 100%;
  max-width: 25px;
  height: 100%;
  max-height: 25px;
  color: #a7a7a7;
`;
export const Input = styled.input.attrs({ placeholder: `Search` })`
  width: 100%;
  height: 100%;
  background: #fff;
  outline: none;
  border: none;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #a7a7a7;
`;



export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

`;


export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  height: 100%;
  gap: 15px;
  @media (max-width: 950px) {
    gap: 10px;
    max-width: none;
    justify-content: flex-end;
  }
`;
export const Cart = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-width: 50px;
 // max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CartIcon = styled(RiShoppingCart2Line)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;

  path {
    fill: black;
  }
`;
export const Count = styled.h1`
  background-color: #d1512d;
  border-radius: 50%;
  padding: 1px;
  position: absolute;
  top: 10px;
  right: 14px;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 12px;
  max-width: 12px;
  font-family: Satoshi-Medium, Helvetica;
  font-size: 10px;
  font-weight: 500;
`;
export const NotifyIcon = styled(IoIosNotifications)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;
  path {
    fill: black;
  }
`;





export const Notification = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const BackButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  width: 100%;
  font-size: 12px;
  min-width: 70px;
  height: 100%;
  min-height: 40px;
  border: none;
  color: #b8a9de;
  border-radius: 2rem;
  cursor: pointer;
  z-index: 1;
  &:hover{
    background: linear-gradient(to right, #5b5fb4 0%, #183786 79%);
    
  }
`;
export const User = styled.div`
  display: flex;
  height: 100%;
  justify-content:space-between;
  align-items: center;
  gap: 8px;
  @media (max-width: 950px) {
    display: none;
  }
`;
export const UserImage = styled.img`
  background-color: #e7e9eb;
  border-radius: 50%;

  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;
export const Text = styled.div`
  color: #3b6381d1;
  letter-spacing: 0;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  position: relative;
`;
export const Option = styled(FaAngleDown)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;
  path {
    fill: black;
  }
`;


export const WrapperContent = styled.div`
display: flex;
flex-direction: rows;
justify-content: flex-end;
align-items: flex-end;
width: 100%;
gap: 10px;
`;
export const TextContent = styled.div`
display: flex;
flex-direction: rows;
font-size: 14px;
font-weight:600;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
gap: 10px;
`;
export const LogButton = styled(Button)`
  width: 100%;
  height: 100%;
  max-height: 35px;
  max-width: 80px;
  /* max-width: 150px; */
  
`;