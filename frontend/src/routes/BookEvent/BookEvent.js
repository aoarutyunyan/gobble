import React from 'react';
import styled from 'styled-components';
import StyledBtn from '../../components/StyledBtn';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { putData } from '../../lib/assetsUtils';

const Wrapper = styled.div`
  padding: 40px;
`;

const DateInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px rgb(177, 177, 177) solid;
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 5px;
  height: 40px;
  cursor: text;
  min-width: 100%;

  &:focus {
    border-color: black;
    outline: 0;
    transition: all 0.2s;
  }
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-right: 10px;
  /* font-weight: 300; */
`;

const TextInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px rgb(177, 177, 177) solid;
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 5px;
  max-width: 80%;
  height: 40px;
  cursor: text;

  &:focus {
    border-color: black;
    outline: 0;
    transition: all 0.2s;
  }
`;

const Dish = styled.div`
  color: white;
  background: #1F2430;
  box-sizing: border-box;
  width: 300px;
  font-size: 1.3em;
  padding: 5px;
  border-radius: 10px;
  margin-top: 1em;
`;

const BookEvent = ({ history, match, chefs, user }) => {
  const chef = chefs.items.filter(({ id }) => id == match.params.chefId)[0];
  const { id, name, tags, dishes, description, zipcode, email } = chef;
  
  return(
    <Wrapper>
      <h1>Book {name}</h1>
      
      <Form>
        <div><StyledLabel htmlFor="title" >Title of Event</StyledLabel></div>
        <TextInput type="text" name="title" placeholder="Create a title" />

        <div><StyledLabel htmlFor="eventDate" >Date</StyledLabel></div>
        <DateInput type="date" name="eventDate" placeholder="mm/dd/yyyy" />

        <div><h2> Available Dishes</h2> {dishes.map(dish => <Dish>{dish}</Dish>)} </div>
        <p>Select the dishes you want for this event by putting them in a comma separated list below</p>        

        <div><StyledLabel htmlFor="dishes" >Event Dishes</StyledLabel></div>
        <TextInput type="text" name="dishes" placeholder="dish1,dish2,dish3" />
        <div><StyledBtn type="submit" theme="pink">Confirm</StyledBtn></div>
      </Form>

    </Wrapper>
  );
};

BookEvent.propTypes = {

};

const unixTimestamp = (datestring) => { //  / 1000
  return parseInt((new Date(datestring).getTime()).toFixed(0));
};

const FormikForm = withFormik({
  mapPropsToValues({ user }) {
    return {
      eventDate: '',
      dishes: '',
    };

  },
  validationSchema: yup.object().shape({
    eventDate: yup
      .date()
      .required('Start date required'),
    dishes: yup
      .string()
      .required(),
  }),
  
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { chefs, match, history, loggedIn, user, updateUser },
  }) {
    setSubmitting(false);
    resetForm();
    const { title, dishes, eventDate } = values;
    const tags = [];

    const splitDishes = dishes.split(',');

    const chef = chefs.items.filter(({ id }) => id == match.params.chefId)[0];

    const chefId = match.params.chefId;
    // PUT FOR user and chef, getting their current event list and appending this new event.
    const forUser = {
      title,
      time: unixTimestamp(eventDate),
      tags,
      chef_id: chefId,
      dishes: splitDishes,
    };

    const forChef = {
      title,
      time: unixTimestamp(eventDate),
      tags,
      chef_id: user.id, // act as if chef_id is user id for chefs...
      dishes: splitDishes,
    };
    console.log('eventDate', eventDate);
    console.log(unixTimestamp(eventDate));
    user.events.push(forUser);
    chef.events.push(forChef);
    console.log(user);
    updateUser(user);

    putData(`http://localhost:4000/users/events/${user.id}`, { events: user.events });
    putData(`http://localhost:4000/users/events/${chefId}`, { events: chef.events });

    const nextLink = '/events';
    history.push(nextLink);
  },
})(BookEvent);

export default FormikForm;
