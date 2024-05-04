import styled from "styled-components";

import { Upload } from "antd";



export const Container=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    flex-direction: column;
    gap: 20px;
    @media (max-width:600px) {
    flex-direction: column;
    gap: 20px;
    
  }
    
`
export const Images = styled.img`

  border-radius: 50%; 
  width: 100%;
  height: 100%;
  max-width: 180px;
  max-height: 180px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
`;



export const Uploads = styled(Upload)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 15px;
  @media (max-width: 700px) {
    gap: 10px; 
  }
  
`;


export const Button = styled.button`
  border: 1px solid #224189;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* width: 100%;
  max-width: 120px; */
  padding: 8px 24px;
  background-color: #224189;
  color: #f7f7f7;
  letter-spacing: 0.12px;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  border: none;
  &:hover{
    background-color: #1b3f75d1;
  }
`;


export const Input =styled.input`
  width: 100%;
  height: 100%;
  min-height: 180px;
  max-height: 180px;
  position: relative;
  max-width: 180px;
  min-width: 180px;
  cursor: pointer;
  border-radius: 50%;
&::-webkit-file-upload-button {
  visibility: hidden;
}
&::before {
  content: 'Upload Image ';
  background: rgb(255,188,217);
  background: radial-gradient(circle, rgba(255,188,217,1) 0%, rgba(191,187,227,1) 40%, rgba(148,187,233,1) 100%);
  border-radius: 3px;
  color: #3f3f3fcc;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  white-space: nowrap;
  -webkit-user-select: none;
  font-weight: 700;
  font-size: 10pt;
}
&:hover::before {
  border-color: black;
}
&:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
`


export const TextContainer=styled.div`
    min-height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`


export const Wrapper = styled.div<{ layout?: 'horizontal' | 'vertical' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.layout === 'vertical' ? 'column' : 'row')};
  height: 100%;
  width: 100%;
  gap: 20px;
`;
export const Loader = styled.div`

  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side,#2dd285c7 90%,#0000);
  background: 
    var(--_g) left, 
    var(--_g) right;
  background-size: 25% 100%;
  display: grid;
&::before,
&::after {
  content: "";
  height: inherit;
  aspect-ratio: 1;
  grid-area: 1/1;
  margin: auto;
  border-radius: 50%;
  transform-origin: -100% 50%;
  background: #077984;
  animation: l49 1s infinite linear;
}
&::after {
  transform-origin: 200% 50%;
  --s:-1;
  animation-delay: -.5s;
}

@keyframes l49 {
  58%,
  100% {transform: rotate(calc(var(--s,1)*1turn))}
}
`