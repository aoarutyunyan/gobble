import React from 'react';
import styled from 'styled-components';
import { getJpg } from '../../lib/assetsUtils';
import { Link } from 'react-router-dom';
import StyledBtn from '../../components/StyledBtn';

const Content = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  background: url(${getJpg('bg')})  no-repeat center center fixed;
  background-size: cover;
  min-height: calc(100vh - 50px);
  color: black;
`;

const Title = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  padding-top: 2em;
  font-weight: 600;
  font-size: 4em;
`;

const Description = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 1em;
  font-size: 1.7em;
  padding-bottom: 1em;
`;

const Slogan = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 1.5em;
  padding: 0.1px;
  line-hieght: 1.2em;
  padding-bottom: 1em;
`;


export const Home = () => {
  
  return (
    <Content>
      <Title>
        <div>Gobble</div>
      </Title>
      <Description>
        <div>Connecting Chefs with Hungry Users Since Fall 2018</div>
      </Description>
      <Slogan>
        <div>Craving a home-cooked meal, but don't have the time to cook?<br /> You've come to the right place.</div>
      </Slogan>
      <Link to="/register">
        <StyledBtn theme="pink">
        Register
        </StyledBtn>
      </Link>
    </Content>
  );
};

export default Home;
