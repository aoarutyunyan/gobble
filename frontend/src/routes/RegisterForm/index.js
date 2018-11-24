import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { withRouter } from 'react-router-dom';
import { updateUser } from 'redux/user/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm));

export default view;
