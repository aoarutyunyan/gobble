import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const ChefProfile = () => {
    return(
        <Content>
            <h1>Chef Profile</h1>
        </Content>
    );
};

export default ChefProfile;