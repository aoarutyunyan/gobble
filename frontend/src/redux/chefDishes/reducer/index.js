import { UPDATE_CHEF_DISHES } from '../action';

const chefDishes = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CHEF_DISHES:
      return action.dishes;
    default:
      return state;
  }
};

export default chefDishes;
