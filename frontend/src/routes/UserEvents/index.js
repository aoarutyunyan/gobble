import UserEvents from './UserEvents';
import { connect } from 'react-redux';
import { updateChefFilters } from '../../redux/chefFilters/actions';


const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  
});

const view = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEvents);

export default view;
