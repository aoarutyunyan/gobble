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

const LoginForm = ({ user, values, errors, touched, isSubmitting }) => (
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

    <StyledBtn style={{ marginTop: '2em', width: '300px' }} theme="pink" disabled={(Object.keys(touched).length === 0 && !values.password) || Object.keys(errors).length !== 0} >
      Submit
    </StyledBtn>
  </Form>
);

LoginForm.propTypes = {
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
      password: '',
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email()
      .required('Email is required.'),
    password: yup
      .string()
      .min(8, 'At least 8 characters.')
      .required('Password is required.'),
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { updateUser, history, logIn, loginUser },
  }) {
    setSubmitting(false);
    resetForm();
    logIn();
    const data = {
      Email: values.email,
      Password: values.password,
    };
    loginUser(data);
    history.push('/home');
  },
})(LoginForm);

export default formikForm;
