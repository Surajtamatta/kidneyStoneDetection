import React, { useState, useEffect } from "react";
import {
  Wrapper,
  SliderContainer,
  Image,
  NextArrow,
  PrevArrow,
  Dot,
  DotContent
} from "@/styles/components/ImageSlider";
import { SliderData } from "@/data/SliderData";
interface SliderDatatype{
  sliderData: SliderData[]
}
const SliderBanner:React.FC<SliderDatatype> = ({sliderData}) => {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handlePrev = () => {
    setCurrImg((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : sliderData.length - 1
    );
  };

  const handleNext = () => {
    setCurrImg((prevIndex) =>
      prevIndex < sliderData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <SliderContainer>
      <PrevArrow onClick={handlePrev} />
      <Wrapper>
        <Image src={sliderData[currImg].img} alt={'image'} />
      </Wrapper>
      <NextArrow onClick={handleNext} />
      <DotContent >
        {sliderData.map((item, index) => (
          <Dot
            key={index}
            active={index === currImg}
            onClick={() => setCurrImg(index)}
          />
        ))}
      </DotContent>
    </SliderContainer>
  );
};

export default SliderBanner;
