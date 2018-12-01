import { LOAD_RATINGS_REQUEST, LOAD_RATINGS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const ratings = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RATINGS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_RATINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.chefs,
      };
    default:
      return state;
  }
};

export default ratings;
