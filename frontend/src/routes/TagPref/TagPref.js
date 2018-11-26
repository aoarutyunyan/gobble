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

const tags = [
  { label: 'Barbecue', value: 1 },
  { label: 'Christmas', value: 2 },
  { label: 'Fish', value: 3 },
  { label: 'Thanksgiving', value: 4 },
];

class TagPref extends React.Component {
  
  handleChange = (filters) => {
    this.props.updateChefFilters(filters);
  }

  render() {
    return(
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
    );
  }
};

TagPref.propTypes = {
  updateChefFilters: PropTypes.func,
};

export default TagPref;
