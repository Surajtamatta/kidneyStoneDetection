

import React,{useState} from 'react'
import {  Drawer,Popover } from 'antd';
import {
  HeaderContainer,
  Wrapper,
  Text,
  Content,
  Count,
  NotifyIcon,
  Notification,
  User,
  UserImage,
  Option,
  SearchContainer,
  SearchWrapper,
  SearchIcon,
  Input,
  WrapperContent,
  LogButton,
  BackButton,
  TextContent,
} from "../../styles/components/Header";
import { useLogin } from '@/utils/Context/login';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Search = () => {
  const {loginState,setLoginState} = useLogin()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  const router = useRouter();

  const handleLogout = () => {
    setLoginState({isLoggedIn:false,userData:null});
    localStorage.removeItem('userToken'); 
    router.push('/');
  };

  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchWrapper>
          <SearchIcon />
          <Input />
        </SearchWrapper>
      </SearchContainer>
      <Content>
        <Notification onClick={showDrawer}>
          <NotifyIcon />
          <Count>2</Count>
        </Notification>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} style={{color: '#152425'}}>
        <p color='black'>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Drawer>
        {!loginState.isLoggedIn ? (
                <>
                 <Link href={'login'}>
                 <BackButton>Login</BackButton>
                 </Link>
                 <Link href={'login'}>
                 <BackButton>sign up</BackButton>
                 </Link>
                </>
                  ):
                  
          <User>
          <UserImage src={"/image/profile.jpeg"} />
          <Text>{loginState?.userData?.user_data?.fullname}</Text>
          <Popover
          placement="bottomRight"
          content={ <Wrapper>
                  <TextContent>
                    Name:
                  <Text>{loginState?.userData?.user_data?.fullname}</Text>
                  </TextContent>
                  <TextContent>
                    Email:
                  <Text>{loginState?.userData?.user_data?.email}</Text>
                  </TextContent>
                  <TextContent>
                    Phone No.:
                  <Text>{loginState?.userData?.user_data?.phone}</Text>
                  </TextContent>
                  <TextContent>
                    Address:
                  <Text>{loginState?.userData?.user_data?.address}</Text>
                  </TextContent>

                <WrapperContent>
                  <LogButton type='primary' onClick={handleLogout}>LogOut</LogButton>
                </WrapperContent>
            
            </Wrapper>}
          trigger="click"
          
          
        >
          <Option/>
        </Popover>
          </User>
        }
        
      </Content>
    </HeaderContainer>
  );
}

export default Search
