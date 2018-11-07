import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import PrimarySearchAppBar from './components/header_footer/PrimarySearchAppBar';
import Routes from './routes/Routes';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Gobble</Link> {/*route to home page see Routes.js*/}
              {/* <PrimarySearchAppBar/> */}
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem> {/*route to signup form see Routes.js*/}
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>  {/*route to login form see Routes.js*/}
              </LinkContainer>
              {/* Currently no route to the user/chef page, waiting on login auth to complete */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;