
import React,{ useState } from "react";
import {
  Container,
  LogoWrapper,
  Nav,
  List,
  Title,
  Text,
  StyleIcon,
  LogOutWrapper,
} from "../../styles/components/Sidebar";
import {
  RiHome4Line,
  RiHeart3Line,
  RiCoupon3Line,
  RiSettings5Line,
} from "react-icons/ri";
import {
  HiOutlineClock,
  HiArrowNarrowRight,
  HiArrowNarrowLeft,
} from "react-icons/hi";
import { MdOutlineReport} from "react-icons/md";
import { IoPersonCircleOutline, IoWalletOutline } from "react-icons/io5";


const Sidebar= () => {
  
 const [boxWidth,setBoxWidth] = useState<boolean>(false);
 const toggleHandleWidth = () => {
   setBoxWidth(!boxWidth);
  };

  return (
    
      <Container   iswidth={boxWidth }>
          <LogoWrapper>
          <Text iswidth={boxWidth}>Logo</Text>
          </LogoWrapper>
          <Nav>
            <List>
              <StyleIcon><RiHome4Line/></StyleIcon>
              <Text iswidth={boxWidth}>Home</Text>
            </List>
            <List>
            <StyleIcon><HiOutlineClock/></StyleIcon>
              <Text iswidth={boxWidth}>History</Text>
            </List>
        

            <Title >Others</Title>
         

            <List>
            <StyleIcon><IoPersonCircleOutline/></StyleIcon>
              <Text iswidth={boxWidth}>Profile</Text>
            </List>
            <List>
            <StyleIcon><RiSettings5Line/></StyleIcon>
              <Text iswidth={boxWidth}>Settings</Text>
            </List>
           
            <List>
            <StyleIcon><MdOutlineReport/></StyleIcon>
              <Text iswidth={boxWidth}>Report</Text>
            </List>
          </Nav>
          <LogOutWrapper onClick={toggleHandleWidth}>
          <StyleIcon>{boxWidth ? <HiArrowNarrowLeft/> : <HiArrowNarrowRight/>}</StyleIcon>   
          </LogOutWrapper>
       
      </Container>
   
  );
}

export default Sidebar
