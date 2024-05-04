import { styled } from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    max-height: 700px;
    
`
export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #485b5e;
  display: flex;
  justify-content:flex-start;
`;
export const Text = styled.li`
  width: 100%;
  color: #6a7274a8;
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 25px;
  text-align: justify;
  list-style: inside;
`;

export const Wrapper = styled.div`
  display: flex;
  text-indent: 25px;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  width: 100%;
`;
export const WrapperContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
`;
export const Content = styled.h1`
  width: 100%;
  color: #6a7274a8;
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-indent: 25px;
  text-align: justify;
  padding-left:25px;
`;