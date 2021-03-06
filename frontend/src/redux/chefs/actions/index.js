export const LOAD_CHEFS_REQUEST = 'LOAD_CHEFS_REQUEST';
export const LOAD_CHEFS_SUCCESS = 'LOAD_CHEFS_SUCCESS';


const chefs = [
  { id: 0, tags: ['fish', 'turkey', 'chicken'], dishes: ['Pasta'],  description: 'Im a chef', name: 'First Last', zipcode: 55555, email: 'asd@asdf.com' },
  { id: 1, tags: ['fish', 'turkey', 'chicken'], dishes: ['Pasta'], description: 'Im a chef', name: 'Second Last', zipcode: 55555, email: 'asd@asdf.com' },
  { id: 2, tags: ['fish', 'turkey', 'chicken', 'Christmas'], dishes: ['Pasta'], description: 'Im a chef', name: 'Third Last', zipcode: 55555, email: 'asd@asdf.com' },
];

export const loadChefsRequest = () => ({
  type: LOAD_CHEFS_REQUEST,
});

export const loadChefsSuccess = json => ({
  type: LOAD_CHEFS_SUCCESS,
  chefs: json,
});

// export const fetchChefs = () => dispatch => {
//   dispatch(loadChefsRequest());
//   dispatch(loadChefsSuccess(chefs));
// };

const url = 'http://localhost:4000/chefs/nearby?zipcode=$&radius=50';

export const fetchChefs = (zipcode) => (dispatch) => {
  dispatch(loadChefsRequest());

  return fetch('http://localhost:4000/chefs')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
    .then(
      json => dispatch(loadChefsSuccess(json)),
    );
};
