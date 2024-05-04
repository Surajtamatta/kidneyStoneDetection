import { styled } from 'styled-components'

export const Container = styled.div<{iswidth:boolean}>`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: ${props=>(props.iswidth ? '220px' : '75px')};
  min-width: ${props=>(props.iswidth ? '220px' : '75px')};
  user-select: none;
  resize: horizontal;
  transition: all 0.5s ease-in-out;
  gap: 10px;
  padding: 10px;
 &::-webkit-resizer{
  height: 100%;
  width: 5px;
 }
 @media (max-width:600px){
  max-width: ${props=>(props.iswidth ? '140px' : '55px')};
  min-width: ${props=>(props.iswidth ? '140px' : '55px')};
  gap: 5px;
  padding: 8px;
 }
`;



export const LogoWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-height: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #d9d9d9;
  @media (max-width:600px){
    max-height: 40px;
 }
`;

export const Nav = styled.ul`
  align-items: flex-start;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content:flex-start;
  position: relative;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 50%;
    right: 3px;
    /* &-thumb {
      background: #000000;
    } */
  }
  @media (max-width:600px){
  gap: 14px;
 }
`;

export const List = styled.li`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 16px;
  color: #607eaa;
  position: relative;
  width: 100%;
  &:hover {
    color: #3f5a82;
    svg {
      background-color: #3f5a82;
      color: white;
      box-shadow: 0px 9px 15px #1c3e6024;
    }
  }
  @media (max-width:600px){
  gap: 0;
 }
  
`;
export const Text = styled.h1<{ iswidth: boolean }>`
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  display: ${(props) => (props.iswidth ? "flex" : "none")};
  transition: all 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  letter-spacing: 0;
  line-height: normal;
  padding: 8px;
  position: relative;
  width: fit-content;
  @media (max-width:600px){
    padding: 5px;
    font-size: 14px;
 }
`;

export const Title = styled.h1`
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  display:flex;
  color: #3f5a82c7;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 0;
  padding: 0 8px;
  text-align: center;
  line-height: normal;
  position: relative;
  @media (max-width:600px){
    padding: 0;
    font-size: 12px;
 }
 
`;

export const LogOutWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  align-items: center;
  display: flex;
  gap: 16px;
  color: #030303;
  border-radius: 8px;
  background-color: #a4a1a191;
 
`;

export const StyleIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
    height: 100%;
    max-height: 40px;
    max-width: 50px;
    /* min-height: 40px;
    min-width: 50px; */
  svg {
    padding: 5px;
    width: 100%;
    height: 100%;
    font-size: 35px;
    border-radius: 8px;

  }
  @media (max-width:600px){
    max-height: 35px;
    max-width: 35px;
    /* min-height: 35px;
    min-width: 35px; */
  svg {
  font-size: 35px;
  }
 }
  
`;

