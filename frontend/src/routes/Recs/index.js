import Recs from './Recs';
import { connect } from 'react-redux';
import { updateChefFilters } from '../../redux/chefFilters/actions';
import { fetchRChefs } from '../../redux/recChefs/actions';


const mapStateToProps = state => ({
  user: state.user,
  recChefs: state.recChefs,
});

const mapDispatchToProps = dispatch => ({
  updateChefFilters: (filters) => {
    dispatch(updateChefFilters(filters));
  },
  fetchRChefs: (userId) => {
    dispatch(fetchRChefs(userId));
  },
});

const view = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recs);

export default view;
