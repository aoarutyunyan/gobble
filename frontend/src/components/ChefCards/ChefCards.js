import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  background: #242729;
  color: white;
  height: 500px;
  width: 300px;
`;

const ChefDescription = styled.div`
  text-align: left;
  color: #242729;
`;

const Heading = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  overflow: hidden;
`;

const Tags = styled.div`
`;


const ChefCard = () => {
  return (
    <Card>
      <Heading>
          Name
      </Heading>
      <ChefDescription>
          Description
      </ChefDescription>
      <Tags>
          
      </Tags>
    </Card>
  );
};

export default ChefCard;
