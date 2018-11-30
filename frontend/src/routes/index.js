import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import NavBar from '../components/NavBar';
import TagPref from './TagPref';
import ChefProfile from './ChefProfile';
import MessageCenter from './MessageCenter';
import UserProfile from './UserProfile';
import UserType from './UserType';


class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/home" render={Home} />
              <Route exact path="/register" render={Register} />
              <Route exact path="/login" render ={Login} />
              <Route exact path="/usertype" component={UserType} />
              <Route exact path="/tagpref" component={TagPref} />
              <Route exact path="/chefprofile" component={ChefProfile} />
              <Route exact path="/userprofile" component={UserProfile} />
              <Route exact path="/messagecenter" component={MessageCenter} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
