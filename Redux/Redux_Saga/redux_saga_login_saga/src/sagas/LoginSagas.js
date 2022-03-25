import * as actions from '../constants/actionTypes';
import axios from 'axios';
import { put, call } from 'redux-saga/effects';

//Iterator object // next() methods
function * performLogin (email,password,ownProps){
    let results = "";
    try{
        results =   yield axios.post('https://reqres.in/api/login', {
                    email: email,
                    password: password
                  })
                  .then(function (response) {
                      console.log(response );
                  return response;
                  })
                  .catch(function (error) {
                    console.log('error in Catch block',error);
                  throw error;            
                  }); 
                }catch(error){
                    console.log('Outer Catch CAlled ',error);
                    throw error;
                }           
             return results; 
    }
  function *loginSagas(request){
      console.log('props to this.. LoginSaga is ',request);
      yield put({type:actions.LOGIN_START}); // Make sure that the loader should run
      //eve.holt@reqres.in
      try{
      const response = yield call(performLogin,request.user,request.email);
     // console.log(response);
      yield put({type:actions.LOGIN_SUCCESS,payload:{response:response.data.token,props:request.props}});
      }catch(error){
        console.log('Error Block',error);
        yield put({type:actions.LOGIN_ERROR,payload:error});
      }
      //dispatch({type:actions.LOGIN_ERROR,payload:error.response.data.error});
     /*
     
                    dispatch({type:actions.LOGIN_ACTION,payload:response.data.token});
                    let { from } = ownProps.location.state || { from: { pathname:'/'} };  
                    ownProps.history.push(from);
          
     */      
  }  

export default loginSagas