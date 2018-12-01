import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledBtn from '../StyledBtn';
import Rating from './Rating';
import '../assets/chefimg.jpg';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 300px;
  height: 500px;
  padding: 30px;
  border: 2px solid white;
  color: black;
  box-sizing: border-box;
  background-color: white;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 500;
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

const CardBtn = styled(StyledBtn)`
  width: 200px;
  margin-top: 1em;
`;

const rating = {
  value: 5,
};

const ChefCard = ({ id, name, dishes, description }) => {

  return (
    <StyledCard>
      <StyledName>{name}</StyledName>

      <ProfileImg />

      <Rating />

      <Link to="/chefprofile">
        <CardBtn theme="pink"> Profile </CardBtn>
      </Link>

      <Link to="/messagecenter">
        <CardBtn theme="outline"> Message </CardBtn>
      </Link>

    </StyledCard>
  );
};

ChefCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  dishes: PropTypes.array,
};

export default ChefCard;
