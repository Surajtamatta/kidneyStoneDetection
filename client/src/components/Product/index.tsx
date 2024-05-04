
import { ProductContainer,Wrapper } from "../../styles/components/Product";
import LabtestCards from "../LabtestCards";

import Slider from "../ImageSlider";
import {slider} from '../../data/SliderData'

const Product = () => {
  return (
    <ProductContainer>
        <Wrapper>
        <Slider sliderData={slider}/>
        </Wrapper>
        <LabtestCards />
    </ProductContainer>
  );
};

export default Product;
