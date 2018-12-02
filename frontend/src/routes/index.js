import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import NavBar from '../components/NavBar';
import Chefs from './Chefs';
import ChefProfile from './ChefProfile';
import MessageCenter from './MessageCenter';
import UserType from './UserType';
import Bookings from '../routes/Bookings';
import Users from '../routes/Users';
import ChefDishes from '../routes/ChefDishes';
import BookEvent from './BookEvent';
import AddTags from '../routes/AddTags';

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

              <Route exact path="/addtags" component={AddTags} />

              <Route exact path="/chefs" component={Chefs} />
              <Route exact path="/chefs/:chefId" render={ChefProfile} />
              <Route exact path="/chefs/:chefId/book" render={BookEvent} />
              
              <Route exact path="/users" component={Users} />
              <Route exact path="/messagecenter" component={MessageCenter} />
              <Route exact path="/bookings" render={Bookings} />
              <Route exact path="/chefdishes" component={ChefDishes} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
