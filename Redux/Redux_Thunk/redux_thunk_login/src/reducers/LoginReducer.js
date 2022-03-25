import initialState from './initialState';
import * as types from '../constants/actionTypes';

//Handles Login Functionalities
 function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_ACTION:{
      window.localStorage.setItem('user',action.payload);
	  console.log('window,storage',window.localStorage);
	  return { ...state, loaded: true, loading: false, user: { token: action.payload },error:'' };
	}
    case types.LOGIN_START:
      return {...state,loading:true};   
    case types.LOGIN_ERROR:
      return {...state,loading:false,loaded:true,error:action.payload};    
    case types.LOGOUT:
      return {...state,user:{token:''}}
    default:
      return state;
  }
}
export default LoginReducer

/*

export const LOGIN_ACTION = 'LOGIN';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
*/