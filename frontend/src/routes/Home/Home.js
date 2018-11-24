import React from 'react';
import styled from 'styled-components';
import { getJpg } from '../../lib/assetsUtils';
import { Link } from 'react-router-dom';

const Content = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  background: url(${getJpg('bg')})  no-repeat center center fixed;
  background-size: cover;
  min-height: calc(100vh - 50px);
  color: white;
`;

const Button = styled.div`
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  display: 'flex',
  justifyContent: 'center',
  padding: 0.25em 1em;
  padding-top: 0.9em;
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
  grid-template-columns: 200px 200px;
  grid-column-gap: 2em;
  text-align: center;
  height: ${props => props.small ? 40 : 40}px;
  width: ${props => props.small ? 60 : 120}px;

  &:hover {
    color: #545C5F;
  }
`;


const theme = {
  main: 'white',
};

const title = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  paddingTop: '2em', 
  fontWeight: '600', 
  fontSize: '4em',
};

const button = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
};

const description = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1em',
  fontSize: '1.7em',
  marginBottom: '2em',
};

const slogan = {
  display: 'flex',
  justifyContent: 'center',
  padding: '0.1px',
  fontSize: '1.5em', 
  lineHieght: '1.2em',
  marginBottom: '1em',
};


export const Home = () => {
  
  return (
    <Content>
      <div style={title}>Gobble</div>
      <div style={description}>Connecting Chefs with Hungry Users Since Fall 2018</div>
      <div style={slogan}>Are you craving a home-cooked meal but don't have the time to cook?<br /> You've come to the right place.</div>
      <div style={button}>
        <Button theme={theme}>
          <Link to="/register">Signup</Link>
        </Button>
      </div>
    </Content>
  );
};

export default Home;
