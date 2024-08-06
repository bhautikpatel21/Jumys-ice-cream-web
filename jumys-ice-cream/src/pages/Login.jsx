import Navbar from '../Components/Navbar'
import img from '../assets/asset 50.jpeg'
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color : black;
  margin-top : 255px;
`;

const FormContainer = styled.div`
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 8px;
  width: 550px;
  height : 500px;
  margin: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 40px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.primary ? 'black' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Link = styled.a`
  margin-left: auto;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ShowHidePassword = styled.span`
  position: absolute;
  right: 10px;
  top: 45px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: relative;
`;

const LoginRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Navbar/>
    <div className='w-full h-[420px] mt-44' id='login-page-img'>
      {/* <img src={} alt="not found" /> */}
      <div className='relative w-full h-16 flex flex-col justify-center items-center -my-40'>
        <p className='my-account'>My Account</p>
        <p className='my-acc-text'><a href="#">Home</a> / <span className='text-red-600'>My Account</span></p>
      </div>
    </div>
    <Container>
      <FormContainer>
        <Icon>👤</Icon>
        <FormTitle>Login</FormTitle>
        <form>
            <label htmlFor="">Username or Email Address</label>
          <Input type="text" required autoComplete="username"/>
          <InputContainer>
          <label htmlFor="">Password</label>
            <Input type={showPassword ? 'text' : 'password'} placeholder="Password" required autoComplete="current-password" />
            <ShowHidePassword onClick={togglePasswordVisibility}>
              {showPassword ? '👁️' : '👁️'}
            </ShowHidePassword>
          </InputContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" /> Remember Me
            <Link href="#forgot-password">Lost Your Password?</Link>
          </CheckboxContainer>
          <Button primary type="submit">Login</Button>
        </form>
      </FormContainer>
      <FormContainer>
        <Icon>🔓</Icon>
        <FormTitle>Register</FormTitle>
        <form>
          <Input type="email" placeholder="Email Address" required autoComplete="email" />
          <InputContainer>
            <Input type={showPassword ? 'text' : 'password'} placeholder="Password" required autoComplete="new-password" />
            <ShowHidePassword onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </ShowHidePassword>
          </InputContainer>
          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    </Container>
    </>
  );
};

export default LoginRegister;
