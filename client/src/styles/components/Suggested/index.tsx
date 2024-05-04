import { styled } from "styled-components";



export const SuggestedConatiner = styled.div`
  width: 100%;
 // max-width: 370px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:auto 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0 10px;
  @media (max-width: 950px) {
    max-width: 100%;
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto 1fr;
    justify-content: center;
    place-items: center;
  }
`;