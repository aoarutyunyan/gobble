import axios from 'axios';

export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES';
export const UPDATE_USER = 'UPDATE_USER';

export const updatePreferences = (preferences) => ({
  type: UPDATE_PREFERENCES,
  preferences,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});
