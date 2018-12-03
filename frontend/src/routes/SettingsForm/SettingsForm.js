import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { red } from '../../lib/stylesConstants';
import StyledBtn from '../../components/StyledBtn';
import { putData } from '../../lib/assetsUtils';

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  margin-right: 10px;
`;

const StyledErrorLabel = styled(StyledLabel)`
  font-size: 1rem;
  color: ${red};
  text-transform: none;
`;

const TextInput = styled(Field)`
  box-sizing: border-box;
  background: #4E5559;
  border: 2px solid ${props => props.error ? red : '#4E5559'};
  border-radius: 10px;
  padding: 0.2em;
  margin-bottom: 1em;
  height: 40px;
  cursor: text;
 
  color: white;

  ::placeholder {
    color: #999D9F;
  }

  :focus {
    border: 2px solid ${props => props.error ? red : 'white'};
    outline: 0;
    transition: all 0.2s;
  }
`;

const SettingsForm = ({ user, values, errors, touched, isSubmitting }) => (
  <Form style={{ marginTop: '2em' }}>

    <div>
      <div>
        <StyledLabel htmlFor="zipcode">Update Zip Code</StyledLabel>
        {errors.zipcode && (values.zipcode || touched.zipcode) && <StyledErrorLabel htmlFor="zipcode">{errors.zipcode}</StyledErrorLabel>}
      </div>
      <TextInput
        error={errors.zipcode && (values.zipcode|| touched.zipcode)}
        type="text"
        name="zipcode"
        style={{ width: '300px' }}
        placeholder="Anywhere"
      />
    </div>

    <StyledBtn style={{ marginTop: '2em', width: '300px' }} theme="pink" disabled={(Object.keys(touched).length === 0 && !values.password) || Object.keys(errors).length !== 0} >
      Submit
    </StyledBtn>
  </Form>
);

SettingsForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  updateUser: PropTypes.func,
  user: PropTypes.object,
};

const formikForm = withFormik({

  mapPropsToValues({ user }) {
    return {
      zipcode: (user && user.zipcdoe) || '',
    };
  },
  validationSchema: yup.object().shape({
    zipcode: yup
      .string()
      .required('Zip code is required.'),
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { updateUser, history, user },
  }) {
    setSubmitting(false);
    resetForm();
    const data = {
      zipcode: parseInt(values.zipcode, 10),
    };
    putData(`http://localhost:4000/users/zipcode/${user.id}`, data);
    // updateuser
    updateUser(data);
    history.push('/chefs');
  },
})(SettingsForm);

export default formikForm;
