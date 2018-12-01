import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import ChefCardList from '../../components/ChefCardList';

const Heading = styled.div`
  margin-top: 1em;
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

class Chefs extends React.Component {
  
  handleChange = (filters) => {
    this.props.updateChefFilters(filters);
  }

  render() {
    return(
      <ListView>
        <Heading>

          <div>
            <h1>Search Local Chefs</h1>

            <Options>
              <Select options={tags} isMulti={true} onChange={this.handleChange} />
            </Options>

          </div>
          
        </Heading>
        <ChefCardList />
      </ListView>
    );
  }
};

Chefs.propTypes = {
  updateChefFilters: PropTypes.func,
};

export default Chefs;
