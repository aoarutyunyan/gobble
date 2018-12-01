import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import loggedIn from './loggedin/reducers';
import user from './user/reducers';
import chefs from './chefs/reducer';
import chefFilters from './chefFilters/reducer';

const initialState = {
  loggedIn: false,
  user: {},
  chefFilters: [],
};
const reducer = combineReducers({
  loggedIn,
  user,
  chefs,
  chefFilters,
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
