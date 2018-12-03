import { connect } from 'react-redux';
import Home from './Home';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));

export default view;
