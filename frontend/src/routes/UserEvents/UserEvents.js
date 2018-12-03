import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import ChefCardList from '../../components/ChefCardList';
import EventCard from '../../components/EventCard';

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

const Event = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6em;
  justify-items: center;
  align-items: center;
  padding-top: 70px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
`;

const ListView = styled.div`
  margin-bottom: 200px;
`;

class UserEvents extends React.Component {

  render() {
    
    const { user } = this.props;
    // const chefIdList = []; // the ids of the chefs we want to display in chefcardlist

    // iterate through events and get a list of chef_IDs...
    const chefIdList = user.events.map(event => event.chef_id);

    console.log(user.chef);


    if(user.chef) {
      return(
        <Event>
          <ListView>
            <Heading>
              <div>
                <h1>Your Upcoming Events</h1>
                {chefIdList.length === 0 && <div style={{ color: 'blue' }}>No Upcoming events.</div>}
              </div>
            </Heading>
            <EventCard name={user.name} dishes={user.dishes} eventDate={'12/02/2018'} />
          </ListView>
        </Event>
      );
    }

    return(
      <ListView>
        <Heading>
          <div>
            <h1>Your Upcoming Events</h1>
            {chefIdList.length === 0 && <div style={{ color: 'blue' }}>No upcoming events. Go book one!</div>}
          </div>
        </Heading>
        <ChefCardList event={true} filterIds={chefIdList}/>
      </ListView>
    );
  }
};

UserEvents.propTypes = {
  fetchUsers: PropTypes.func,
};

export default UserEvents;
