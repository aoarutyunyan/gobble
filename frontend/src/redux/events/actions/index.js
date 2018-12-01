export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';


const events = [
  { id: 0, userId: '2', chefId: '2', date: '10/22/2018' },
];

export const loadEventsRequest = () => ({
  type: LOAD_EVENTS_REQUEST,
});

export const loadEventsSucess = json => ({
  type: LOAD_EVENTS_SUCCESS,
  events: json,
});

export const fetchUsers = () => dispatch => {
  dispatch(loadEventsRequest());
  dispatch(loadEventsSucess(events));
};
