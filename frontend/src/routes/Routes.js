import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../containers/home/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />  {/*Home is set as the root*/}
    <Route path="/login" exact component={Login} />  {/*Routes to Login.js on click*/}
    <Route component={NotFound} />  {/* temp page until register form is completed this is where signup button goes for now*/}
  </Switch>;