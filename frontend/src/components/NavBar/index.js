import { connect } from 'react-redux';
import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar));

export default view;
