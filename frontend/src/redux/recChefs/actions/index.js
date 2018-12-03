export const LOAD_RCHEFS_REQUEST = 'LOAD_CHEFS_REQUEST';
export const LOAD_RCHEFS_SUCCESS = 'LOAD_CHEFS_SUCCESS';

export const loadRChefsRequest = () => ({
  type: LOAD_RCHEFS_REQUEST,
});

export const loadRChefsSuccess = json => ({
  type: LOAD_RCHEFS_SUCCESS,
  recChefs: json,
});

export const fetchRChefs = (userId) => (dispatch) => {
  dispatch(loadRChefsRequest());

  return fetch(`http://localhost:4000/recommendations/${userId}`)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(loadRChefsSuccess(json)),
    );
};
