import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../redux/user/actions';
import { logIn } from '../../redux/loggedin/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
  logIn: () => {
    dispatch(logIn());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm));

export default view;
