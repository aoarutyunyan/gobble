import { UPDATE_CHEF_FILTERS } from '../actions';

const chefFilters = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CHEF_FILTERS:
      return action.filters;
    default:
      return state;
  }
};

export default chefFilters;
