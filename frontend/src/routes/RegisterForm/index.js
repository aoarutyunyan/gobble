import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../redux/user/actions';
import { logIn } from '../../redux/loggedIn/actions';
import { registerUser } from '../../redux/user/actions';

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
  registerUser: (data) => {
    dispatch(registerUser(data));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm));

export default view;
