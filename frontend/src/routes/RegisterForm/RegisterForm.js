import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getJpg } from '../../lib/assetsUtils';

const Background = styled.div`
  background: url(${getJpg('bg')})  no-repeat center center fixed;
  background-size: cover;
  min-height: calc(100vh - 50px);
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.85rem;
  color: white;
  margin-right: 10px;
  /* font-weight: 300; */
`;

const StyledErrorLabel = styled(StyledLabel)`
  color: red;
  text-transform: none;
`;

const TextInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px solid ${props => props.error ? 'red' : 'rgb(177, 177, 177)'};
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 1em;
  max-width: 80%;
  height: 40px;
  cursor: text;

  &:focus {
    border: 2px solid ${props => props.error ? 'red' : 'black'};
    outline: 0;
    transition: all 0.2s;
  }
`;

const Button = styled.div`
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  display: 'flex',
  justifyContent: 'center',
  padding: 0.25em 1em;
  padding-top: 0.9em;
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
  grid-template-columns: 200px 200px;
  grid-column-gap: 2em;
  text-align: center;
  height: ${props => props.small ? 20 : 20}px;
  width: ${props => props.small ? 500 : 500}px;

  &:hover {
    color: #545C5F;
  }
`;

const button = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
};

const theme = {
  main: 'white',
};

const field = {
  display: 'flex',
  justifyContent: 'center',
};

const fieldAlignment = {
  display: 'flex',
  justifyContent: 'center',
  paddingRight: '40px',
};

const SignUpForm = ({ user, values, errors, touched, isSubmitting }) => (
  <Background>
    <Form style={{ marginTop: '2em' }}>
      <div style={field}>
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

      <div style={fieldAlignment}>
        <div>
          <StyledLabel htmlFor="username">Username</StyledLabel>
          {touched.username && errors.username && <StyledErrorLabel htmlFor="username">{errors.username}</StyledErrorLabel>}
        </div>
        <TextInput
          autoComplete="username"
          error={touched.username && errors.username}
          type="text"
          name="username"
          style={{ width: '300px' }}
          placeholder="Create a username"
        />
      </div>

      <div style={fieldAlignment}>
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
      <div style={button}>
        <Button theme={theme} disabled={(Object.keys(touched).length === 0 && !values.password) || Object.keys(errors).length !== 0} >
            Next
        </Button>
      </div>
    </Form>
  </Background>
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
      username: (user && user.username) || '',
      password: '',
    };
  },
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .required('Username is required.'),
    email: yup
      .string()
      .email('Must be a valid email.')
      .required('Email is required.'),
    password: yup
      .string()
      .min(8, 'Requires at least 8 characters.')
      .required('Password is required.'),
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { updateUser, history },
  }) {
    setSubmitting(false);
    resetForm();
    updateUser(values);
    history.push('/preferences');
  },
})(SignUpForm);

export default formikForm;
