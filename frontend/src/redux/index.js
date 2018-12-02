import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import loggedIn from './loggedin/reducer';
import user from './user/reducers';
import chefs from './chefs/reducer';
import users from './users/reducer';
import chefFilters from './chefFilters/reducer';

const initialState = {
  chefFilters: [],
  loggedIn: false,
  user: {},
};
const reducer = combineReducers({
  chefFilters,
  chefs,
  loggedIn,
  user,
  users,
});

const thunk = store => next => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  
  return next(action);
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(reducer, initialState, enhancers);

export default store;
