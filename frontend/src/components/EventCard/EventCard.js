import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledBtn from '../StyledBtn';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  width: 250px;
  height: 450px;
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
  font-size: 1.3em;
  font-weight: 500;
`;

const CardBtn = styled(StyledBtn)`
  width: 200px;
  margin-top: 1em;
`;

const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

const Dishes = styled.div`
  text-align: center;
  padding-top: 5px;
`;

const Host = styled.div`
  text-align: center;
  padding-top: 5px;
`;

const Date = styled.div`
  text-align: center;
  padding-top: 5px;
`;

// display event title, dishes, date


const EventCard = ({ id, name, title, user, dishes, eventDate }) => {

  return (
    <StyledCard>
      <StyledName>{title}</StyledName>

      <div>
        <StyledName style={{ paddingTop: '20px' }}>EVENT HOST</StyledName>
        <Host>{name}</Host>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <StyledName style={{ marginTop: '20px' }}>EVENT DISHES</StyledName>
        <Dishes>{dishes}</Dishes>
      </div>

      <div>
        <StyledName style={{ marginTop: '20px' }}>EVENT DATE</StyledName>
        <Date>{eventDate}</Date>
      </div>

    </StyledCard>
  );
};

EventCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default EventCard;
