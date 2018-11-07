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
              <Link to='/'>Gobble</Link> {/* Route to home page if Gobble is clicked in navbar  */}
              {/* <PrimarySearchAppBar/> */}
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup"> 
              {/* Route to signup page when signup is clicked */}
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">  
              {/* Route to login page when login is clicked see Login.js */}
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;