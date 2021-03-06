import React from 'react';
import PropTypes from 'prop-types';
import ChefCard from '../../components/ChefCard';
import styled from 'styled-components';
import EventCard from '../EventCard';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 6em;
  justify-items: center;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
  }
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6em;
  justify-items: center;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
  }
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
    const { chefFilters, chefs, user, users, filterIds, event, dishes } = this.props;

    const filterList = [];
    

    for (const key of Object.keys(chefFilters)) {
      filterList.push(chefFilters[key].label);
    }

    if (chefs.isFetching) {
      return (<div>fetching</div>);
    }

    const chefRatings = user.outgoingReviews && user.outgoingReviews.reduce((acc, el) => {
      acc[el.subject_id] = el.rating; 
      
      return acc; 
    }, {});
    console.log('filterIds', filterIds);
    console.log(chefs.items);

    let event_dishes = [];

    if (event) {
      const chefList = chefs.items.filter(({ id }) => filterIds.includes(id.toString()) || filterIds.includes(id));
      
      const chefEvents = user.events.reduce( (acc, { title, time, chef_id, dishes }) => {
        acc[chef_id] = { title, time, dishes };
        event_dishes = dishes;
        
        return acc;
      }, {});

      // create a new component to show events
      return (
        <EventList>
          {chefList
            .filter(({ tags }) => numOverlapping(tags, filterList) === chefFilters.length)
            .map(props => (
              <React.Fragment>
                <EventCard {...props} user={user} dishes={chefEvents[props.id].dishes} eventDate={`${new Date(chefEvents[props.id].time).toISOString().split('T')[0]}`}/>
                <ChefCard {...props} user={user} currentRating={chefRatings && chefRatings[props.id]} eventDate={`${new Date(chefEvents[props.id].time).toISOString().split('T')[0]}`} key={props.id} />
              </React.Fragment>
            ))}
        </EventList>
      );
    }
    
    return (
      <List>
        {chefs.items
          .filter(({ tags }) => numOverlapping(tags, filterList) === chefFilters.length)
          .map(props => (
            <ChefCard {...props} user={user} currentRating={chefRatings && chefRatings[props.id]} key={props.id} />
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
