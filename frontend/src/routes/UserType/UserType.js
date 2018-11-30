import React from 'react';
import styled from 'styled-components';
import StyledBtn from '../../components/StyledBtn';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`;


export const UserType = () => {
  return (
    <Wrapper>
      <h1>Account Type</h1>
      <div>
        <Link to="/register">
          <StyledBtn theme="pink">
            Chef
          </StyledBtn>
        </Link>

      </div>
      <div>
        <Link to ="/register">
          <StyledBtn theme="pink">
          Seeker
          </StyledBtn>
        </Link>
      </div>
    </Wrapper>  
  );
};

export default UserType;
