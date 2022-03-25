import * as actionTypes from './constants/actionTypes';
export const loginUserAction = (user) => ({
    type: actionTypes.LOGIN_ACTION,
    user
  });