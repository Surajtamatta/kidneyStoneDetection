
import React from 'react';
import { MainContainer,BackButton, Wrapper, Content, WelcomeText, Form, InputContainer, Input, Errors, ButtonContainer, Button, TextContent, Text, LoginWith, HorizontalRule, LinksContainer, Social, Links, ForgotPassword } from '../../styles/pages/Login';
import { LoginData } from "../../data/LoginData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../utils/validation/login';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLogin } from 'utils/Context/login';


const Login = () => {  
  type LoginFormInputs = {
    email: string;
    password: string;
  };

 
  const {  setLoginState } = useLogin();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
    getValues,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    const formData = {
      email: getValues('email'),
      password: getValues('password'),
    };

    try {
    
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const userData = await response.json();
        if (userData.success === true){
          setLoginState({ isLoggedIn: true, userData });
          alert(userData?.message);
          reset(); 
          router.push('/'); 
        }
        else {
          reset();

          alert(userData?.message)
        }
       
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (

      <MainContainer>
         <Link href={'/'}>
         <BackButton type="submit">Back</BackButton>
         </Link>
        <Wrapper>
          <Content>
            <WelcomeText>Login Page</WelcomeText>
            <LinksContainer>
              {LoginData.map((item) => {
                return (
                  <Social key={item.id}>
                    <Links href={item.url}>
                      <item.Icon />
                      {item.text}
                    </Links>
                  </Social>
                );
              })}
            </LinksContainer>
            <HorizontalRule />
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <InputContainer>
                <Input type="email" placeholder="Email" {...register("email")} />
                <Errors>{errors.email?.message}</Errors>
                <Input type="password" placeholder="Password" {...register("password", { required: true })} />
                <Errors>{errors.password?.message}</Errors>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">Login</Button>
              </ButtonContainer>
            </Form>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <HorizontalRule />
            <TextContent>
              <Text> Don&apos;t have an account? </Text>
              <Link href='registration'>
                <LoginWith>Sign Up</LoginWith>
              </Link>
            </TextContent>
          </Content>
        </Wrapper>
      </MainContainer>
  
  );
}

export default Login;
