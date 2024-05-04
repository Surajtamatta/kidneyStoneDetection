import { styled } from "styled-components";


export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  max-height: calc(100vh - 70px);
  display: grid;
  grid-template-columns:3.5fr minmax(0,2fr);
 gap: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: none;
    height: auto;
    gap: 15px;
  }
`;