import { connect } from 'react-redux';
import ChefProfile from './ChefProfile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  chefFilters: state.chefFilters,
  chefs: state.chefs,
});


export default ChefProfile;
