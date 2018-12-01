import { LOAD_EVENTS_REQUEST, LOAD_EVENTS_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.events,
      };
    default:
      return state;
  }
};

export default events;
