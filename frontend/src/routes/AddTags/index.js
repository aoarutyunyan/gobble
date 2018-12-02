import { connect } from 'react-redux';
import FormikForm from './AddTags';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  chefFilters: state.chefFilters,
  chefs: state.chefs,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormikForm));

export default view;
