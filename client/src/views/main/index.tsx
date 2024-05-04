import { MainWrapper } from "../../styles/views/main";
import Product from "../../components/Product";
import Suggested from "../../components/Suggested";



const Mainhero = () => {
  return (
        <MainWrapper>
          <Product />
          <Suggested />
        </MainWrapper>
  );
};

export default Mainhero;
