import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import UserCardList from '../../components/UserCardList';
import UserCard from '../../components/UserCard';
import StyledBtn from '../../components/StyledBtn';
import { Link } from 'react-router-dom';

const Heading = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListView = styled.div`
  margin-bottom: 200px;
`;

const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const SubmitBtn = styled(StyledBtn)`
  width: 200px;
  margin-top: 1em;
`;


class Users extends React.Component {

  render() {
    return(
      <ListView>
        <Heading>

          <div>
            <h1>Users</h1>

            <Link to="/bookings">
              <SubmitBtn theme="dark"> <TextIcon style={{ marginLeft: '-15px' }} icon="book" color="#fff" /> <span>View Bookings</span> </SubmitBtn>
            </Link>

            <UserCard />
          </div>

          {/* <UserCardList /> */}
        </Heading>
      </ListView>
    );
  }
};

export default Users;
