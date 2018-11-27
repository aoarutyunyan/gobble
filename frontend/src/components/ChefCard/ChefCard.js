import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledBtn from '../StyledBtn';
import '../assets/chefimg.jpg';

import './CardStyle.css';

const ProfileButton = styled.div`
  padding-top: 10px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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


const ChefCard = () => {
  return (
    <div class="ChefGrid">
      <div class="ChefCard">
        <NameWrapper>
          <div class="ChefName">Gordon Ramsay</div>
        </NameWrapper>
        <ProfileImg />
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
        <ProfileButton>
          <Link to="/chefprofile">
            <StyledBtn theme="pink">
              Profile
            </StyledBtn>
          </Link>
        </ProfileButton>
        <Link to="/messagecenter">
          <StyledBtn theme="pink">
            Message
          </StyledBtn>
        </Link>
      </div>

      <div class="ChefCard">
        <div class="ChefName">Gordon Ramsay</div>
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
      </div>

      <div class="ChefCard">
        <div class="ChefName">Gordon Ramsay</div>
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
      </div>

      <div class="ChefCard">
        <div class="ChefName">Gordon Ramsay</div>
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
      </div>

      <div class="ChefCard">
        <div class="ChefName">Gordon Ramsay</div>
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
      </div>

      <div class="ChefCard">
        <div class="ChefName">Gordon Ramsay</div>
        <div class="ChefTags">Fish<br />Hamburgers<br />Steak</div>
      </div>

    </div>
  );
};

export default ChefCard;
