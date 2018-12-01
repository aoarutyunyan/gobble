import { connect } from 'react-redux';
import ChefProfile from './ChefProfile';
import { withRouter } from 'react-router-dom';
import { addEvent } from '../../redux/events/actions';
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
  addEvent: (username, chefId, date) => {
    dispatch(addEvent(username, chefId, date));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChefProfile));

export default view;
