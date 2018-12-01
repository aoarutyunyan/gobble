import { LOAD_CHEFS_REQUEST, LOAD_CHEFS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const chefs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHEFS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_CHEFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.chefs,
      };
    default:
      return state;
  }
};

export default chefs;
