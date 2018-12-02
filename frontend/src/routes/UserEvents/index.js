import UserEvents from './UserEvents';
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
)(UserEvents);

export default view;
