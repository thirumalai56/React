import axios from 'axios';
function * performLogin (email,password){

    const response  =   yield axios.post('https://reqres.in/api/login', {
                        email: email,
                        password: password
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log('error in Catch block',error);
                      });            
    yield put({ type: "NEWS_RECEIVED", json: response });              
    }
 function * loginSagas(){
    yield put({type:"LOGIN_START"});

 } 
 export default loginSagas   