import { connect } from 'react-redux';
import UserCardList from './UserCardList';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../redux/users/actions';
import { fetchEvents } from '../../redux/events/actions';

const mapStateToProps = state => ({
  chefs: state.chefs,
  user: state.user,
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserCardList));

export default view;
