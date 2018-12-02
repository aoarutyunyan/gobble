import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 6em;
  justify-items: center;
  align-items: center;
  padding-top: 70px;
`;

class UserCardList extends React.Component {

  render() {

    return (
      <List>
        <UserCard currentRating={3}/>
      </List>
    );
  }
}

UserCardList.propTypes = {
  users: PropTypes.object,
  user: PropTypes.object,
  event: PropTypes.bool,
};

export default UserCardList;
