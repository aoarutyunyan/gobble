export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';


const users = [
  { id: 0, email: 'asdf@asdf.com', username: 'muhusername' },
];

export const loadUsersRequest = () => ({
  type: LOAD_USERS_REQUEST,
});

export const loadUsersSuccess = json => ({
  type: LOAD_USERS_SUCCESS,
  users: json,
});

export const fetchUsers = () => dispatch => {
  dispatch(loadUsersRequest());
  dispatch(loadUsersSuccess(users));
};
