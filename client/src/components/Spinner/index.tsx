import React, { ReactNode } from 'react'
import {Spin,Container} from '@/styles/components/Spinner'
interface SpinType{
    children?:ReactNode
    spin?:boolean;
}
const Spinner = ({children,spin}:SpinType) => {
  return (
   
      <Container>
         {spin && <Spin/>}
            {children}
      </Container>
  
  )
}

export default Spinner
