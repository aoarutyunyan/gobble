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

class UserEvents extends React.Component {

  render() {
    const { user } = this.props;
    // const chefIdList = []; // the ids of the chefs we want to display in chefcardlist

    // iterate through events and get a list of chef_IDs...
    const chefIdList = user.events.map(event => event.chef_id);

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
};

export default UserEvents;
