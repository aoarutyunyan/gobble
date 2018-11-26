export const UPDATE_CHEF_FILTERS = 'UPDATE_CHEF_FILTERS';

// Search actions
export const updateChefFilters = (filters) => ({
  type: UPDATE_CHEF_FILTERS,
  filters,
});
