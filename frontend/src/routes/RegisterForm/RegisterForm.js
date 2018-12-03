import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { red } from '../../lib/stylesConstants';
import StyledBtn from '../../components/StyledBtn';

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

const SignUpForm = ({ user, values, errors, touched, isSubmitting }) => (
  <Form style={{ marginTop: '2em' }}>
    <div>
      <div>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        {touched.email && errors.email && <StyledErrorLabel htmlFor="email">{errors.email}</StyledErrorLabel>}
      </div>
      <TextInput
        error={touched.email && errors.email}
        type="text"
        name="email"
        style={{ width: '300px' }}
        placeholder="you@example.com"
      />
    </div>

    <div>
      <div>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        {touched.name && errors.name && <StyledErrorLabel htmlFor="name">{errors.name}</StyledErrorLabel>}
      </div>
      <TextInput
        autoComplete="name"
        error={touched.name && errors.name}
        type="text"
        name="name"
        style={{ width: '300px' }}
        placeholder="Create a name"
      />
    </div>

    <div>
      <div>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        {errors.password && (values.password || touched.password) && <StyledErrorLabel htmlFor="password">{errors.password}</StyledErrorLabel>}
      </div>
      <TextInput
        autoComplete="new-password"
        error={errors.password && (values.password || touched.password)}
        type="password"
        name="password"
        style={{ width: '300px' }}
        placeholder="Create a password"
      />
    </div>

    <div>
      <div>
        <StyledLabel htmlFor="zipcode">Zip Code</StyledLabel>
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

    <div>
      <div><StyledLabel htmlFor="isChef">Are you a chef?</StyledLabel></div>
      <StyledLabel style={{ textTransform: 'none', marginTop: '1em', marginRight: '1em' }}>Yes</StyledLabel> <Field type="checkbox" name="isChef" />
    </div>

    <StyledBtn style={{ marginTop: '2em', width: '300px' }} theme="pink" disabled={(Object.keys(touched).length === 0 && !values.password) || Object.keys(errors).length !== 0} >
      Submit
    </StyledBtn>
  </Form>
);

SignUpForm.propTypes = {
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
      email: (user && user.email) || '',
      name: (user && user.name) || '',
      zipcode: (user && user.zipcdoe) || '',
      password: '',
    };
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .required('Name is required.'),
    email: yup
      .string()
      .email('Must be a valid email.')
      .required('Email is required.'),
    zipcode: yup
      .string()
      .required('Zip code is required.'),
    password: yup
      .string()
      .min(8, 'At least 8 characters.')
      .required('Password is required.'),
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { updateUser, history, logIn, registerUser },
  }) {
    setSubmitting(false);
    resetForm();
    logIn();
    const data = {
      name: values.name,
      password: values.password,
      passwordConf: values.password,
      chef: values.isChef || false,
      email: values.email,
      zipcode: parseInt(values.zipcode, 10),
    };
    registerUser(data);
    const nextLink = values.isChef ? '/addtags' : '/chefs';
    history.push(nextLink);
  },
})(SignUpForm);

export default formikForm;
