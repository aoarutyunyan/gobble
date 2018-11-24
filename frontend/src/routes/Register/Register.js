import React from 'react';
import RegisterForm from '../RegisterForm';
import styled from 'styled-components';
import { getJpg } from '../../lib/assetsUtils';

const Background = styled.div`
  background: url(${getJpg('bg')})  no-repeat center center fixed;
  background-size: cover;
  min-height: calc(100vh - 50px);
`;

const Heading = styled.div`
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  color: white;
`;

const content = {
  paddingTop: '100px',
  paddingRight: '20px',
};

const Register = () => {
  return (
    <Background style={content}>
      <Heading>Create an Account</Heading>
      <RegisterForm />
    </Background>
  );
};

export default Register;
