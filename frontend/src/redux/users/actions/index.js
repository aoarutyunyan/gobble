export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export const loadUsersRequest = () => ({
  type: LOAD_USERS_REQUEST,
});

export const loadUsersSuccess = json => ({
  type: LOAD_USERS_SUCCESS,
  users: json,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(loadUsersRequest());

  return fetch('http://localhost:4000/users')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(loadUsersSuccess(json)),
    );
};
