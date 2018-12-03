import { LOAD_RCHEFS_REQUEST, LOAD_RCHEFS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const recChefs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RCHEFS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_RCHEFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.chefs,
      };
    default:
      return state;
  }
};

export default recChefs;
