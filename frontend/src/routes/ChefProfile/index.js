import { connect } from 'react-redux';
import ChefProfile from './ChefProfile';
import { withRouter } from 'react-router-dom';
import { fetchChefs } from '../../redux/chefs/actions';

const mapStateToProps = state => ({
  chefFilters: state.chefFilters,
  chefs: state.chefs,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchChefs: () => {
    dispatch(fetchChefs());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChefProfile));

export default view;
