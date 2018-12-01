export const LOAD_CHEFS_REQUEST = 'LOAD_CHEFS_REQUEST';
export const LOAD_CHEFS_SUCCESS = 'LOAD_CHEFS_SUCCESS';


const chefs = [
  { id: 0, tags: ['fish', 'turkey', 'chicken'], description: 'Im a chef', name: 'muh name', zipcode: 55555 },
  { id: 1, tags: ['fish', 'turkey', 'chicken'], description: 'Im a chef', name: 'muh name', zipcode: 55555 },
  { id: 2, tags: ['fish', 'turkey', 'chicken', 'Christmas'], description: 'Im a chef', name: 'muh name', zipcode: 55555 },
];

export const loadChefsRequest = () => ({
  type: LOAD_CHEFS_REQUEST,
});

export const loadChefsSuccess = json => ({
  type: LOAD_CHEFS_SUCCESS,
  chefs: json,
});

export const fetchChefs = () => dispatch => {
  dispatch(loadChefsRequest());
  dispatch(loadChefsSuccess(chefs));
};
