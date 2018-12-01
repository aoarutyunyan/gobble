import React from 'react';
import styled from 'styled-components';
import StyledBtn from '../../components/StyledBtn';

const Wrapper = styled.div`
  padding-top: 80px;
`;

export const Book = () => {
  return(
    <Wrapper>
      <h1>Book Chef</h1>
      <p>Do you want to continue booking this chef?</p>
      <StyledBtn theme="pink">Confirm</StyledBtn>
    </Wrapper>
  );
};

export default Book;
