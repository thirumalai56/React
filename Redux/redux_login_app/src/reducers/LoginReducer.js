import initialState from './initialState';
import * as types from '../constants/actionTypes';

//Handles Login Functionalities
 function LoginReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_ACTION:
      return [...state];
    default:
      return state;
  }
}
export default LoginReducer