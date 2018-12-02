import { connect } from 'react-redux';
import ChefCardList from './ChefCardList';
import { withRouter } from 'react-router-dom';
import { fetchChefs } from '../../redux/chefs/actions';
import { fetchUsers } from '../../redux/users/actions';

const mapStateToProps = state => ({
  chefFilters: state.chefFilters,
  chefs: state.chefs,
  user: state.user,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchChefs: () => {
    dispatch(fetchChefs());
  },
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChefCardList));

export default view;
