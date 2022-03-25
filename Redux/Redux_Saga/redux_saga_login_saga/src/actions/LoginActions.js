import * as actionTypes from '../constants/actionTypes';
export const loginUserAction = (user) => ({
    type: actionTypes.LOGIN_ACTION,
    user
  });
export const performLogin = (user,email,props)=>{
  return {
    type: actionTypes.LOGIN,
    user,
    email,
    props
  }
} ;
 