import * as types from '../constants/actionTypes';
const initialState = {
    items: { kind: null, totalItems: 0, items: []},
    error: null
  };
 const booksReducer = (state = initialState, action) => {
     console.log('book Redcuer logger',action);
    switch (action.type) {
     
      case types.GOOGLE_BOOKS_QUERY_COMPLETE:
        return {...state, items: action.payload};
      case types.GOOGLE_BOOKS_QUERY_ERROR:
        return {...state, error: action.payload};
      default:
        return state;
    }
  };
  export default booksReducer