import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getJpg } from '../../lib/assetsUtils';
import { NavLink } from 'react-router-dom';
import StyledBtn from '../../components/StyledBtn';
import BookingCalendar from 'react-booking-calendar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  flex-direction: column;
  padding: 0 40px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  padding-top: 2px;
  display: flex;
  align-self: center;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChefInfo = styled.div`
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;  
`;

const Biography = styled.div`
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
`;

const MessageBtn = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 600px;
  height: 600px;
`;

const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const ChefProfile = ({ history, match, chefs }) => {
  const chef = chefs.items.filter(({ id }) => id == match.params.chefId)[0];
  const { id, name, tags, dishes, events, description, zipcode, email } = chef;
  console.log('chef', chefs);
  console.log('events', events);
  const bookings = events.map(event => new Date(`${event.date} 00:000`));

  console.log('bookings', bookings);

  return(
    <Content>
      <Heading>
        <h1>{name}</h1>
      </Heading>

      <ProfileImg src={getJpg('chefimg')} />

      <MessageBtn>
        <a href={`mailto:${email}`}> <StyledBtn theme="outlineBlue"> <TextIcon icon="envelope" /> <span>Message</span> </StyledBtn></a>
      </MessageBtn>

      <div>
        <Biography>
          <h2>Bio</h2>

          <div>
            <TextIcon icon="map-marker-alt" />
            Zip Code: {zipcode}
            <div><br />{description}</div>
          </div>
        </Biography>

        <ChefInfo>
          <h2>Specialty Dishes</h2>

          <div> {dishes.map(dish => <div>{dish}</div>)} </div>

          <h2>Tags</h2>
          <div> {tags.map(tag => <div>{tag}</div>)} </div>

          <h2>Boook Me!</h2>
          <p>Dark blue entries are when I'm busy.</p>
          <NavLink to={`/chefs/${id}/book`}><StyledBtn theme="pink">Book</StyledBtn></NavLink>
          <Calendar>
            <BookingCalendar bookings={bookings}/>
          </Calendar>

        </ChefInfo>
      </div>

    </Content>
  );
}; 

ChefProfile.propTypes = {
  chefs: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default ChefProfile;
