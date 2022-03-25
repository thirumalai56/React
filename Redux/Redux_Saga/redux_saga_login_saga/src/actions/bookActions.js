import * as actionTypes from '../constants/actionTypes';

export const googleBooksByQuery = (payload) => {
  return {
    type: actionTypes.GOOGLE_BOOKS_QUERY,
    payload: payload
  };
};

export const googleBooksByQueryComplete = (payload) => {
  return {
    type: actionTypes.GOOGLE_BOOKS_QUERY_COMPLETE,
    payload: payload
  };
};

export const googleBooksByQueryError = (payload) => {
  return {
    type: actionTypes.GOOGLE_BOOKS_QUERY_ERROR,
    payload: payload
  };
};


