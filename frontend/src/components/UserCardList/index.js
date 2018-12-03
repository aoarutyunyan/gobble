import { connect } from 'react-redux';
import UserCardList from './UserCardList';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../redux/users/actions';

const mapStateToProps = state => ({
  userFilters: state.userFilters,
  chefs: state.chefs,
  user: state.user,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserCardList));

export default view;
