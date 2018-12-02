import React from 'react';
import UserCardList from '../../components/UserCardList';
import UserCard from '../../components/UserCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-top: 80px;
`;

export const Bookings = () => {
  return(
    <Wrapper>
      <h1 style={{ justifyContent: 'center', display: 'flex' }}>Bookings</h1>
      <UserCardList event={true}/>
    </Wrapper>
  );
};

export default Bookings;
