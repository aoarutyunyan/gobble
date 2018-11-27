import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

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

const ListView = styled.div`
  margin-bottom: 200px;
`;

const tags = [
  { label: 'Barbecue', value: 1 },
  { label: 'Christmas', value: 2 },
  { label: 'Fish', value: 3 },
  { label: 'Salads', value: 4 },
  { label: 'Thanksgiving', value: 5 },
];

const cards = [
  {
    name: 'Chef A',
    tags: ['Barbecue', 'Fish'],
  },
  {
    name: 'Chef B',
    tags: ['Salads, Thanksgiving'],
  },
  {
    name: 'Chef C',
    tags: ['Christmas, Fish'],
  },
];

class TagPref extends React.Component {
  
  handleChange = (filters) => {
    this.props.updateChefFilters(filters);
  }

  render() {
    return(
      <ListView>
        <Heading>
          <div>
            <h1>Choose Tags</h1>
            <Options>
              <Select
                options={tags}
                isMulti={true}
                onChange={this.handleChange}
              />
            </Options>
          </div>
        </Heading>
      </ListView>
    );
  }
};

TagPref.propTypes = {
  updateChefFilters: PropTypes.func,
};

export default TagPref;
