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

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {

    const { users, user } = this.props;

    if (users.isFetching) {
      return (<div>fetching</div>);
    }

    const userRatings = user.outgoingReviews && user.outgoingReviews.reduce((acc, el) => {
      acc[el.subject_id] = el.rating; 
      
      return acc; 
    }, {});

    return (
      <List>
        {users.items
          .map(props => (
            <UserCard {...props} user={user} currentRating={userRatings && userRatings[props.id]} key={props.id} />
          ))}
      </List>
    );
  }
}

UserCardList.propTypes = {
  users: PropTypes.object,
  user: PropTypes.object,
  fetchUsers: PropTypes.func,
  event: PropTypes.bool,
};

export default UserCardList;
