import React from 'react';
import UserCardList from '../../components/UserCardList';
import styled from 'styled-components';
import EventCard from '../../components/EventCard';

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
      <EventCard name={'username'} dishes={'hamburger'} eventDate={'12/1/2018'}/>
    </Wrapper>
  );
};

export default Bookings;
