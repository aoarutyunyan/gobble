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
  width: 100%;
`;

const ListView = styled.div`
  margin-bottom: 200px;
`;

const tags = [
  { label: 'Thanksgiving', value: 1 },
  { label: 'Italian', value: 2 },
  { label: 'Christmas', value: 3 },
  { label: 'dessert', value: 4 },
  { label: 'French', value: 5 },
  { label: 'pastries', value: 6 },
  { label: 'Mexican', value: 7 },
  { label: 'poultry', value: 8 },
  { label: 'Chinese', value: 9 },
  { label: 'fusion', value: 10 },
  { label: 'alcohol', value: 11 },
  { label: 'Mediterranean', value: 12 },
  { label: 'vegetarian', value: 13 },
  { label: 'different', value: 14 },
  { label: 'Japanese', value: 15 },
  { label: 'seafood', value: 16 },
  { label: 'Southern', value: 17 },
  { label: 'comfort food', value: 18 },
  { label: 'summer', value: 19 },
  { label: 'block party', value: 20 },
  { label: 'grill', value: 21 },
  { label: 'experimental', value: 22 },
];

class Chefs extends React.Component {
  
  handleChange = (filters) => {
    this.props.updateChefFilters(filters);
  }

  componentDidMount() {
    const { fetchRChefs, user } = this.props;
    fetchRChefs(user.id);
  }

  render() {
    const { recChefs } = this.props;
    if (recChefs.isFetching) {
      return (<div>fetching</div>);
    }
    const filterIds = recChefs.items;
    
    return(
      <ListView>
        <Heading>

          <div>
            <h1>Search Recommended Chefs</h1>

            <Options>
              <Select options={tags} isMulti={true} onChange={this.handleChange} />
            </Options>

          </div>
          
        </Heading>
        <ChefCardList filterIds={filterIds}/>
      </ListView>
    );
  }
};

Chefs.propTypes = {
  updateChefFilters: PropTypes.func,
  fetchRChefs: PropTypes.func,
  user: PropTypes.object,
};

export default Chefs;
