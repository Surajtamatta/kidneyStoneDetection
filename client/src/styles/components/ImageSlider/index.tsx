
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { styled } from "styled-components";


export const SliderContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: rebeccapurple;
  &:hover {
    svg {
      color: rgb(255, 255, 255);
      background-color: #b5e8e8d9;
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #826e53;
  border-radius: 16px;

`;
export const Image = styled.div<{ src: string , alt:string}>`
  background-image: url(${props => props.src}) ;
  background-size: cover;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  min-height: 100px;

`;

export const NextArrow = styled(GoTriangleRight)`
  width: 100%;
  height: 100%;
  max-width: 20px;
  position: absolute;
  max-height: 35px;
  right:2px;
  border-radius: 8px 0 0 8px;
   z-index: 2;
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
  z-index: 2;
  color: transparent;
  &:hover {
    color: rgb(0, 0, 0);
    background-color: #eff2f2cd;
  }
`;

export const Dot = styled.div<{active:boolean}>`
  width: 20px;
  height: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? ' #757878d2' : ' #eff6f6df')};
  margin: 0 5px;
  cursor: pointer;
`;
export const DotContent = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 8px;
 height: 100%;
 max-height: 20px;
 position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;

`;