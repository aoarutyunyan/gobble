import React from 'react';
import PropTypes from 'prop-types';
// import { preventFocus } from 'lib/accessibilityUtils';
import styled from 'styled-components';
import { blue } from '../../lib/stylesConstants';

const themes = {
  dark: {
    border: '1px solid transparent',
    color: 'white',
    backgroundColor: '#343A40',
    hoverBgColor: '#23272b',
  },
  green: {
    border: '1px solid transparent',
    color: 'white',
    backgroundColor: 'green',
    hoverBgColor: 'rgb(0, 148, 89)',
  },
  outline: {
    border: '2px solid black',
    color: 'black',
    backgroundColor: 'transparent',
    hoverColor: '#B04235',
    hoverBgColor: 'transparent',
    hoverBorder: '2px solid #B04235',
  },
  outlineBlue: {
    border: '2px solid black',
    color: 'black',
    backgroundColor: 'transparent',
    hoverColor: blue,
    hoverBgColor: 'transparent',
    hoverBorder: `2px solid ${blue}`,
  },
  outlineWhiteBlue: {
    border: '2px solid white',
    color: 'white',
    backgroundColor: 'transparent',
    hoverColor: blue,
    hoverBgColor: 'transparent',
    hoverBorder: `2px solid ${blue}`,
  },
  pink: {
    border: '1px solid transparent',
    color: 'white',
    backgroundColor: '#FC5C63',
    hoverBgColor: '#DF3C47',
  },
};


const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1em;
  height: 40px;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-sizing: border-box;
  
  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  border: ${props => themes[props.theme].border};
  background-color: ${props => themes[props.theme].backgroundColor};
  color: ${props => themes[props.theme].color};

  &:not(:disabled):hover {
    border: ${props => themes[props.theme].hoverBorder};
    background-color: ${props => themes[props.theme].hoverBgColor};
    color: ${props => themes[props.theme].hoverColor};
  }
`;

StyledButton.defaultProps = {
  theme: 'dark',
};

export const StyledBtn = ({ onClick, children, theme, ...rest }) => {
  return (
    <StyledButton
      onClick={onClick}
      // onMouseDown={preventFocus}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

StyledBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  theme: PropTypes.string,
};

export default StyledBtn;
