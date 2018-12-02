import { connect } from 'react-redux';
import UserCardList from './UserCardList';
import { withRouter } from 'react-router-dom';
// import { fetchEvents } from '../../redux/events/actions';

const mapStateToProps = state => ({
  userFilters: state.userFilters,
  chefs: state.chefs,
  user: state.user,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  // fetchEvents: () => {
  //   dispatch(fetchEvents());
  // },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserCardList));

export default view;
