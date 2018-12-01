export const LOAD_RATINGS_REQUEST = 'LOAD_RATINGS_REQUEST';
export const LOAD_RATINGS_SUCCESS = 'LOAD_RATINGS_SUCCESS';


const ratings = [
  { rating: 2, reviewer: 2, reviewee: 4 },
  { rating: 2, reviewer: 3, reviewee: 4 },
  { rating: 2, reviewer: 5, reviewee: 4 },
];

export const loadRatingsRequest = () => ({
  type: LOAD_RATINGS_REQUEST,
});

export const loadRatingsSuccess = json => ({
  type: LOAD_RATINGS_SUCCESS,
  chefs: json,
});

export const fetchRatings = () => dispatch => {
  dispatch(loadRatingsRequest());
  dispatch(loadRatingsSuccess(ratings));
};
