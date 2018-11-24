import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Link.css';
import { NavLink } from 'react-router-dom';
import { getSvg } from '../../lib/assetsUtils';

class RouteLink extends React.Component {
  render() {
    const {
      path,
      iconName,
      name,
      ...rest
    } = this.props;

    return (
      <NavLink
        activeClassName="Link--active"
        className="Link"
        to={path}
        draggable="false"
        onClick={this.props.onClick}
        {...rest}
      >
        {iconName && ( <img className="Link__icon" src={getSvg(iconName)} alt={name} />)}
        <p className="Link__text">{name}</p>
      </NavLink>
    );
  }
}

RouteLink.propTypes = {
  iconName: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default RouteLink;
