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
    const userList = [];
    
    const { users, event, events, chef } = this.props;

    if (events.isFetching) {
      return (<div>fetching</div>);
    }

    for (const key of Object.keys(users.items)) {
      if(event) {
        for (let i = 0; i < events.items.length; i++) {
          if(events.items[i].userId == key && events.items[i].username == chef.username) {
            userList.push({ userId: key, ...users.items[key], date: events.items[i] });
            break;
          }
        }
      } else {
        userList.push({ userId: key, ...users.items[key] });
      }
    }
    
    return (
      <List>
        {userList
          .map(props => (
            <UserCard {...props} key={props.userId} />
          ))}
      </List>
    );
  }
}

UserCardList.propTypes = {
  users: PropTypes.object,
  fetchUsers: PropTypes.func,
  event: PropTypes.bool,
};

export default UserCardList;
