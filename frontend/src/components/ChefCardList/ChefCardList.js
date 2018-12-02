import React from 'react';
import PropTypes from 'prop-types';
import ChefCard from '../../components/ChefCard';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 6em;
  justify-items: center;
  align-items: center;
  padding-top: 70px;
`;

const numOverlapping = (list1, list2) => {
  return list1.reduce((acc, el) => list2.includes(el) ? acc + 1 : acc, 0);
};

// add the tag filtering stuff here
class ChefCardList extends React.Component {

  componentDidMount() {
    this.props.fetchChefs();
  }

  render() {
    const { chefFilters, chefs, user, users, filterIds } = this.props;

    // const filteredChefs = chefs.filter( ({ id }) => filterIds.includes());
    const filterList = [];
    

    for (const key of Object.keys(chefFilters)) {
      filterList.push(chefFilters[key].label);
    }

    if (chefs.isFetching) {
      return (<div>fetching</div>);
    }
    console.log('chefs', chefs);
    
    return (
      <List>
        {chefs.items
          .filter(({ tags }) => numOverlapping(tags, filterList) === chefFilters.length)
          .map(props => (
            <ChefCard {...props} currentRating={2} eventDate={'2012'} key={props.chefId} />
          ))}
      </List>
    );
  }
}

ChefCardList.propTypes = {
  chefFilters: PropTypes.arrayOf(PropTypes.string),
  chefs: PropTypes.object,
  user: PropTypes.object,
  fetchChefs: PropTypes.func,
  booking: PropTypes.bool,
};

export default ChefCardList;
