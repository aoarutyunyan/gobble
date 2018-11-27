import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getJpg } from '../../lib/assetsUtils';

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

const Biography = styled.div`
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
`;

const Dishes = styled.div`
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;  
`;

export const ChefProfile = ({ name, imgName, bio, dishes }) => {
  return(
    <Content>
      <Heading>
        {/* { name } */}
        <h1>Gordon Ramsay</h1>
      </Heading>
      <ProfileImg />
      <div>
        <Biography>
          <h2>Chef Bio:</h2>

          <div>
            {/* { bio } */}
            Born in Scotland in 1966, Gordon Ramsay left behind an early athletic career to 
            become a renowned chef in London. 
            By the early 2000s he was making his mark on British TV as the 
            temperamental host of Ramsay's Kitchen Nightmares and Hell’s Kitchen, 
            shows that made a successful transition to American audiences. 
            The award-winning chef has since expanded his celebrity brand via 
            such programs as MasterChef and Hotel Hell and opening more restaurants around the globe.
          </div>
        </Biography>
        <Dishes>
          <h2>Specialty Dishes:</h2>

          <div>
            {/* { Dishes } */}
            <ul>
              <li>Fish</li>
              <li>Hamburgers</li>
              <li>Deserts</li>
            </ul>
          </div>
        </Dishes>
      </div>
    </Content>
  );
}; 

ChefProfile.propTypes = {
  name: PropTypes.string,
  imgName: PropTypes.string,
  bio: PropTypes.string,
  dishes: PropTypes.string,
};

export default ChefProfile;

// background: url(${getJpg('bg')})  no-repeat center center fixed;
// background-size: cover;
// min-height: calc(100vh - 50px);
