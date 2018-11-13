import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';

//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

const store = createStore(
    Reducer,
    {},
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById("root")

);

serviceWorker.unregister();
