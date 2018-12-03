import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledBtn from '../../components/StyledBtn';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { topNavHeight } from '../../lib/stylesConstants';


const Title = styled(NavLink)`
  align-self: center;
  justify-self: center;
  color: white;
  font-size: 1.5em;
  padding-left: 15px;
  box-sizing: border-box;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
`;

const activeClassName = 'nav-item-active';
const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: #eee;
  font-size: 1.3rem;
  padding-left: 15px;
  box-sizing: border-box;
  padding: 0 15px;
  /* border-bottom: 2px solid transparent; */
  box-sizing: border-box;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  /* height: 50px; */

  &:hover {
    color: #FC5C63;
    /* border-bottom: 5px solid #FC5C63;; */
  }

  &.${activeClassName} {
    color: #FC5C63;
    /* border-bottom: 5px solid #FC5C63;; */
  }
`;

const AccountButton = styled.div`
  color: #eee;
  font-size: 1.3rem;
  padding-left: 15px;
  box-sizing: border-box;
  padding: 0 15px;
  /* border-bottom: 2px solid transparent; */
  box-sizing: border-box;
  transition: all 0.2s;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    color: #FC5C63;
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #242729
  width: 100vw;
  border-top: 2px solid #eee;
  padding: 15px;
  box-sizing: border-box;
  position: absolute;
  z-index: 51;
`;

const Container = styled.div`
  position: sticky;
  top: 0; 
  z-index: 1;
`;

const StyledNav = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: black;
  width: 100%;
  position: sticky;
  height: ${topNavHeight};
  z-index: 100;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
`;

class TopNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      acctDropdownShown: false,
    };
  }

  handleAccountClick = () => {
    this.setState({ acctDropdownShown: !this.state.acctDropdownShown });
  }

  closeDropdown = () => {
    this.setState({ acctDropdownShown: false });
  }

  render() {
    const { loggedIn, user, logOut } = this.props;
    
    return (
      <Container>
        <StyledNav>
          <Title  onClick={this.closeDropdown} to="/home">
            <span role="img" aria-label="turkey" style={{ marginRight: '5px' }}>🦃</span>
            Gobble
          </Title>

          <Right>
            {loggedIn && user && !user.chef && <StyledLink  onClick={this.closeDropdown} to="/chefs" activeClassName={activeClassName}>Chefs</StyledLink> }
            {/* {loggedIn && user && user.chef &&  <StyledLink  onClick={this.closeDropdown} to="/bookings" activeClassName={activeClassName}>Bookings</StyledLink> } */}

            { loggedIn && (
              <AccountButton onClick={this.handleAccountClick}>
                {user.name}
                <FontAwesomeIcon
                  style={{ marginLeft: '5px' }}
                  icon="caret-down"
                />
              </AccountButton>
            )}

            {!loggedIn && <Link to="/login"><StyledBtn theme="outlineWhiteBlue">Sign In</StyledBtn></Link>}
          </Right>
        </StyledNav>

        {this.state.acctDropdownShown && 
          <Dropdown onClick={this.handleAccountClick}>
            <div style={{ background: '#242729' }}>
              <StyledLink style={{ marginBottom: '1em', display: 'block' }} to="/events" activeClassName={'f'}>Events</StyledLink>
              {user && !user.chef && <StyledLink style={{ marginBottom: '1em', display: 'block' }} to="/settings" activeClassName={'f'}>Settings</StyledLink>}
              {user && user.chef && <StyledLink style={{ marginBottom: '1em', display: 'block' }} to="/addtags" activeClassName={'f'}>Settings</StyledLink>}
              <StyledLink style={{ marginBottom: '1em', display: 'block' }} onClick={logOut} to="/home" activeClassName={'f'}>Log Out</StyledLink>
            </div>
          </Dropdown>
        }

        {this.state.acctDropdownShown && <Backdrop onClick={this.handleAccountClick}/>}
      </Container>
    );
  }
}

TopNav.propTypes = {
  loggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default TopNav;
