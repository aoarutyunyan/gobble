import { connect } from 'react-redux';
import FormikForm from './BookEvent';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../redux/user/actions';

const mapStateToProps = state => ({
  chefFilters: state.chefFilters,
  chefs: state.chefs,
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
)(FormikForm));

export default view;
