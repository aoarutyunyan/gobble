import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import MultiSelectReact from 'multi-select-react';

const Heading = styled.div`
  margin-top: 1em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  color: #242729;
  width: 50em;
`;

const tags = [
  { label: "Barbecue", value: 1},
  { label: "Christmas", value: 2},
  { label: "Fish", value: 3},
  { label: "Thanksgiving", value: 4},
];

export const TagPref = () => {

  return(
    <Heading>
      <div>
        <h1>Choose Tags</h1>
        <Options>
        <Select 
          options={tags} 
          isMulti={true} 
        />
        </Options>
      </div>
    </Heading>
  );
};

export default TagPref;
