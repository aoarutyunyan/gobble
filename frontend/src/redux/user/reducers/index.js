import { UPDATE_PREFERENCES, UPDATE_USER } from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PREFERENCES:
      return { ...state, preferences: action.preferences };
    case UPDATE_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default user;
