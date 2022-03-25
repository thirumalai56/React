import initialState from './initialState';
import * as types from '../constants/actionTypes';

//Handles Login Functionalities
 function LoginReducer(state = initialState, action) {
  switch (action.type) {
   /*
    case types.LOGIN_ACTION:{
      
      window.localStorage.setItem('user',action.payload);
	  console.log('window,storage',window.localStorage);
	  return { ...state, loaded: true, loading: false, user: { token: action.payload },error:'' };
	} */
    case types.LOGIN_START:
      return {...state,loading:true};   
    case types.LOGIN_ERROR:{
      console.log('action in login Error --> ',action);
      return {...state,loading:false,loaded:true,error:action.payload.message};    
    }
    case types.LOGOUT:
      return {...state,user:{token:''}}
    case types.LOGIN_SUCCESS:{
      console.log('In Success function ',action);
      window.localStorage.setItem('user',action.payload.response);
      let ownProps = action.payload.props;
      let { from } = ownProps.location.state || { from: { pathname:'/'} };  
                    ownProps.history.push(from);
      return {...state,loading:false,loaded:true,user:{token:action.payload.response}}  
    }
      
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