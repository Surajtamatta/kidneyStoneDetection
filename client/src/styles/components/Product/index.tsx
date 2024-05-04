import { styled } from "styled-components";


export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    border-radius: 50%;
    right: 2px;
    &-thumb {
      background-color: #000000;
    }
  }
  @media (max-width: 950px) {
  overflow:visible;
  height: max-content;

  }
`;


export const Wrapper= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 300px;
`