import { connect } from 'react-redux';
import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';
import { logOut } from '../../redux/loggedIn/actions';

const mapStateToProps = state => ({
  loggedIn: state.logedIn,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar));

export default view;
