import { postData } from '../../../lib/assetsUtils';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN_USER_REQUEST  = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export const REGISTER_USER_REQUEST  = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';


export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = json => ({
  type: LOGIN_USER_SUCCESS,
  user: json,
});

export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = json => ({
  type: REGISTER_USER_SUCCESS,
  user: json,
});

export const loginUser = (data) => (dispatch) => {
  dispatch(loginUserRequest());

  return postData('http://localhost:4000/login', data)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(loginUserSuccess(json)),
    );

};

export const registerUser = (data) => (dispatch) => {
  dispatch(registerUserRequest());

  return postData('http://localhost:4000/register', data)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(registerUserSuccess(json)),
    );

};
