import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux';
import Home from './Home';
import Register from './Register';


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/home" render={Home} />
              <Route exact path="/register" render={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;




// export default () =>
//   <Switch>
//     <Route path="/" exact component={Home} />  {/*Home is set as the root*/}
//     <Route path="/login" exact component={Login} />  {/*Routes to Login.js on click*/}
//     <Route path="/signup" exact component={Signup} />  {/*Routes to Signup.js on click*/}
//     <Route component={NotFound} />  {/* temp page until register form is completed this is where signup button goes for now*/}
//   </Switch>;