import React from 'react';
import LoginForm from '../LoginForm';
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  margin-top: 5em;
  align-content: center;
  justify-content: center;
`;

const Heading = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  color: white;
`;

const Login = () => {
  return (
    <Content >
      <Heading>Sign In</Heading>
      <LoginForm />
    </Content>
  );
};

export default Login;
