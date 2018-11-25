import React from 'react';
import RegisterForm from '../RegisterForm';
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

const Register = () => {
  return (
    <Content >
      <Heading>Create an Account</Heading>
      <RegisterForm />
    </Content>
  );
};

export default Register;
