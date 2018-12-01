import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledBtn from '../StyledBtn';
import Rating from './Rating';
import '../assets/chefimg.jpg';
import { getJpg } from '../../lib/assetsUtils';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  width: 300px;
  height: 500px;
  padding: 30px;
  border: 2px solid gray;
  color: black;
  box-sizing: border-box;
  background-color: white;
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
    z-index: 0;
  }
`;

const ZipCode = styled.div`
  padding: 5px 10px;
  display: inline-block;
  background: #eee;
  text-align: left;
  font-weight: 400;
  width: 160px;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 500;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  /* border: 1px solid blue; */
  /* padding-top: 2px; */
  display: flex;
  align-self: center;
  align-items: center;
`;

const CardBtn = styled(StyledBtn)`
  width: 200px;
  margin-top: 1em;
`;

const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const StyledRating = styled(Rating)`
  background: black;
`;

const Description = styled.div`
  text-align: left;
`;

const rating = {
  value: 5,
};

const ChefCard = ({ id, name, dishes, description, zipcode }) => {

  return (
    <StyledCard>
      <StyledName>{name}</StyledName>

      <div style={{ marginTop: '10px', marginBottom: '2em' }}><ProfileImg  src={getJpg('chefimg')}/></div>

      <StyledRating />

      <div>
        <StyledName style={{ marginTop: '20px', marginBottom: '20px' }}>DESCRIPTION</StyledName>
        <Description>{description}</Description>
      </div>

      <div>
        <ZipCode>
          <TextIcon icon="map-marker-alt" />
          Zip Code: {zipcode}
        </ZipCode>

        <Link to="/chefprofile">
          <CardBtn theme="dark"> <TextIcon style={{ marginLeft: '-15px' }} icon="user" color="#fff" /> <span>Profile</span> </CardBtn>
        </Link>

        <Link to="/messagecenter">
          <CardBtn theme="outlineBlue"> <TextIcon icon="envelope" /> Message </CardBtn>
        </Link>
      </div>

    </StyledCard>
  );
};

ChefCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  zipcode: PropTypes.string,
  dishes: PropTypes.array,
};

export default ChefCard;
