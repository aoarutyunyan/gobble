export const UPDATE_CHEF_DISHES = 'UPDATE_CHEF_DISHES';

export const updateChefDishes = (dishes) => ({
  type: UPDATE_CHEF_DISHES,
  dishes,
});
