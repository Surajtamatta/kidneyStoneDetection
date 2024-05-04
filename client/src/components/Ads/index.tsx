import React from 'react'
import {
    Container,
    ImageContainer,
    Img,
    Wrapper,
    Title,
    Description,
    Button,
  } from "../../styles/components/Ads";
  export interface Data {
    id: number;
    title: string;
    img: string;
    description:string;
}

const Ads:React.FC<Data> = ({id,title,img,description}) => {
  return (
    <Container key={id} >
    <ImageContainer>
      <Img 
      src={img}
      fill
      sizes="(min-width: 808px) 50vw, 100vw"
      style={{
        objectFit: 'cover',
      }} 
      alt={`Image`}
      />
    </ImageContainer>
    <Wrapper>
      <Title>{title}</Title>
      <Description>
      {description}
      </Description>
      <Button>See</Button>
    </Wrapper>
  </Container>
  )
}

export default Ads
