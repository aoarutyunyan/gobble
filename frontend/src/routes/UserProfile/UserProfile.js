import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getJpg } from '../../lib/assetsUtils';
import { Link } from 'react-router-dom';
import StyledBtn from '../../components/StyledBtn';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  color: white;
  flex-direction: column;
  padding: 0 40px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  padding-top: 2px;
  display: flex;
  align-self: center;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodPreferences= styled.div`
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
`;

const MessageBtn = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const UserProfile = ({ name, imgName, bio, dishes }) => {
  return(
    <Content>
      <Heading>
        {/* { name } */}
        <h1>Username</h1>
      </Heading>

      <ProfileImg />

      <MessageBtn>
        <Link to="/messagecenter">
          <StyledBtn theme="pink">
            Message
          </StyledBtn>
        </Link>
      </MessageBtn>

      <div>
        <FoodPreferences>
          <h2>Food Preferences:</h2>

          <div>
            {/* { bio } */}
            <ul>
              <li>Seafood</li>
              <li>Spaghetti</li>
              <li>Salads</li>
              <li>Beef</li>
              <li>Pork</li>
              <li>Hamburgers</li>
            </ul>
          </div>
        </FoodPreferences>
      </div>

    </Content>
  );
}; 

UserProfile.propTypes = {
  name: PropTypes.string,
  imgName: PropTypes.string,
  bio: PropTypes.string,
  dishes: PropTypes.string,
};

export default UserProfile;
