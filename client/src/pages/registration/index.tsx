import {
  MainContainer,
  Wrapper,
  Content,
  WelcomeText,
  Form,
  InputContainer,
  Input,
  Errors,
  ButtonContainer,
  Button,
  TextContent,
  Text,
  LoginWith,
  HorizontalRule,
  LinksContainer,
  Social,
  Links,
  Inputwrapper,
  BackButton,
} from '../../styles/pages/Registration';
import { LoginData } from '../../data/RegistrationData';
import {  useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/validation/registration';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  type RegisterFormInputs = {
    email: string;
    password: string;
    fullname: string;
    address: string;
    phone: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    reset, // Add reset method
    formState: { errors },
    getValues,
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });



  const handleRegistration = async () => {
    const formData = {
      fullname: getValues('fullname'),
      address: getValues('address'),
      phone: getValues('phone'),
      email: getValues('email'),
      password: getValues('password'),
    };

    try {
      setLoading(true);
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('successfully register');
        router.push('login');

        reset(); 
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error registering:', error);
    } finally {
      setLoading(false);
    }
  };

  return (

      <MainContainer>
      <Link href={'/'}>
         <BackButton type="submit">Back</BackButton>
         </Link>
        <Wrapper>
          <Content>
            <WelcomeText>Registration Page</WelcomeText>
            <LinksContainer>
              {LoginData.map((item,index) => {
                return (
                  <Social key={index}>
                    <Links href={item.url} key={item.id}>
                      <item.Icon />
                    </Links>
                  </Social>
                );
              })}
            </LinksContainer>
            <HorizontalRule />
            <Form onSubmit={handleSubmit(handleRegistration)} noValidate>
              <InputContainer>
                <Inputwrapper>
                  <Input type="fullname" placeholder="Full Name" {...register('fullname')} />
                  <Errors>{errors.fullname?.message}</Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="email" placeholder="Email" {...register('email')} />
                  <Errors>{errors.email?.message}</Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="phone" placeholder="Phone" {...register('phone')} />
                  <Errors>{errors.phone?.message}</Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="address" placeholder="Address" {...register('address')} />
                  <Errors>{errors.address?.message}</Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="password" placeholder="password" {...register('password')} />
                  <Errors>{errors.password?.message}</Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register('confirmPassword', {
                      validate: (value) => value === getValues('password') || 'Passwords do not match',
                    })}
                  />
                  <Errors>{errors.confirmPassword?.message}</Errors>
                </Inputwrapper>
              </InputContainer>

              <ButtonContainer>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Registering...' : 'Registration'}
                </Button>
              </ButtonContainer>
            </Form>

            <HorizontalRule />
            <TextContent>
              <Text>Already have an account?</Text>
              <Link href="/login">
                <LoginWith>Sign in</LoginWith>
              </Link>
            </TextContent>
          </Content>
        </Wrapper>
      </MainContainer>

  );
};

export default Login;
