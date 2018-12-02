import { UPDATE_USER, LOGIN_USER_REQUEST, REGISTER_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.user };
    case LOGIN_USER_SUCCESS: 
      return { ...state, ...action.user };
    case REGISTER_USER_SUCCESS: 
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default user;
