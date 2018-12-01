import Chefs from './Chefs';
import { connect } from 'react-redux';
import { updateChefFilters } from '../../redux/chefFilters/actions';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateChefFilters: (filters) => {
    dispatch(updateChefFilters(filters));
  },
});

const view = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chefs);

export default view;
