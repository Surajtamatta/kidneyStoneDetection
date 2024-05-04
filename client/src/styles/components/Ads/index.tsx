import { styled } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background: linear-gradient(#eae3d2 0%, #d3c9b0 100%);
  border-radius: 16px;
  width: 100%;
  height: 100%;
 max-height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const ImageContainer = styled.div`
  background-color: #e7e9eb;
  width: 100%;
  height: 100%;
  /* max-width: 143px; */
  max-height: 300px;
  min-height: 210px;
  border-radius: 16px;
  position: relative;
`;
export const Img = styled(Image)`
  background-color: #e7e9eb;
  width: 100%;
  height: 100%;
  /* max-width: 143px;
  max-height: 192px; */
  border-radius: 16px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  display: flex;
  justify-content:center;
  align-items:flex-start;
  flex-direction: column;
  gap: 8px;
  padding: 15px ;
`;
export const Title = styled.div`
  color: #1c3879;
  letter-spacing: 0;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
export const Description = styled.div`
  color: #89806d;
  letter-spacing: 0.12px;
  width: 100%;
  max-width: 173px;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 12px;
  font-weight: 500;
  line-height:15px;
`;
export const Button = styled.div`
  border: 1px solid #1c3879;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 120px;
  padding: 8px 24px;
  color: #1c3879;
  letter-spacing: 0.12px;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;