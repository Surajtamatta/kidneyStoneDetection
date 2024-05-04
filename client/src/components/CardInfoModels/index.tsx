/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
  Container,
} from '../../styles/components/CardInfoModels'
import UploadFile from '../UploadFIle';



interface DetailTypes{
  items:any;
}
const CardInfoModels:React.FC<DetailTypes> = ({items}) => {
    
 return(
      <Container >
              <UploadFile
              items={items}
             />
     </Container >
 
  )
}

export default CardInfoModels