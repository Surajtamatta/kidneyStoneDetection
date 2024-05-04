import { styled } from "styled-components";

export const Container=styled.div`
background-color: #ffffff;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
export const Sections = styled.div`
  width: 100%;
  height: 100vh;
  background: #f7f6f5;
  border-radius: 24px 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px;
   @media (max-width: 950px) {
    max-height: none;
    height: 100%;
    overflow: scroll;
  }
`;