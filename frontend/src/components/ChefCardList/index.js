import { connect } from 'react-redux';
import ChefCardList from './ChefCardList';
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
)(ChefCardList));

export default view;
