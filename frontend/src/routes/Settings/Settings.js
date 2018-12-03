import React from 'react';
import SettingsForm from '../SettingsForm';
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background: #242729;
  min-height: calc(100vh - 50px);
`;

const Heading = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  color: white;
`;

const Register = () => {
  return (
    <Content >
      <Heading>Update your Settings</Heading>
      <SettingsForm />
    </Content>
  );
};

export default Register;
