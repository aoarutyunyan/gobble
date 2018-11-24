import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.85rem;
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

const NextBtn = styled(CTABtn)`
  display: block;
  margin-top: 2em;
  height: 50px;
  width: 100%;
  font-size: 1.3em;
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
    <NextBtn theme="pink" type="submit" disabled={(Object.keys(touched).length === 0 && !values.password) || Object.keys(errors).length !== 0} >
      Next
    </NextBtn>
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
  /* if we get initial props from somewhere else and you want to put those values in there initially */
  /* need to initialize them all to at least empty string to get rid of "uncontrolled to controlled" error */
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
