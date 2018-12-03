import React from 'react';
import styled from 'styled-components';
import StyledBtn from '../../components/StyledBtn';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { putData } from '../../lib/assetsUtils';
import UserCardList from '../../components/UserCardList';

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

const AddTags = () => {
//   const chef = chefs.items.filter(({ id }) => id == match.params.chefId)[0];
//   const { id, name, tags, dishes, description, zipcode, email } = chef;
  
  return(
    <Wrapper>
      {/* {name} */}
      <h1>asdf</h1>
      
      <Form>      

        <div><StyledLabel htmlFor="tags" >Add Tags</StyledLabel></div>
        <TextInput type="text" name="tags" placeholder="Tag1,Tag2,Tag3" />

        <div><StyledLabel htmlFor="dishes" >Add Dishes</StyledLabel></div>
        <TextInput type="text" name="dishes" placeholder="dish1,dish2,dish3" />
        <div><StyledBtn type="submit" theme="pink">Confirm</StyledBtn></div>
      </Form>

      <UserCardList />

    </Wrapper>
  );
};


const FormikForm = withFormik({
  mapPropsToValues({ user }) {
    return {
      tags: '',  
      dishes: '',
    };

  },
  validationSchema: yup.object().shape({
    tags: yup
      .string()
      .required(),
    dishes: yup
      .string()
      .required(),
  }),
  
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { users, match, history, loggedIn },
  }) {
    setSubmitting(false);
    resetForm();
    const { tags, dishes } = values;

    const splitDishes = dishes.split(',');
    const splitTags = tags.split(',');

    const user = users.items.filter(({ id }) => id == match.params.userId)[0];

    const chefId = match.params.chefId;

    const forChef = {
      tags: splitTags,
      dishes: splitDishes,
      chefId: user.id,
    };

    user.dishes.push(splitDishes);
    user.tags.push(splitTags);

    putData(`http://localhost:4000/users/dishes/${user.id}`, { dishes: user.dishes });
    putData(`http://localhost:4000/users/tags/${user.id}`, { tags: user.tags });

    const nextLink = '/chefs';
    history.push(nextLink);
  },
})(AddTags);

export default FormikForm;
