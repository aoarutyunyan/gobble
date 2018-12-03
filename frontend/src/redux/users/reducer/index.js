import { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.users,
      };
    default:
      return state;
  }
};

export default users;
