import * as actions from '../constants/actionTypes';
import axios from 'axios';
import { createBrowserHistory } from 'history';



const performLogin = (email,password,ownProps)=>{
//  const history = useHistory();
//const history = createBrowserHistory();

return ( (dispatch,getState)=>{
     console.log('mapDispatchToProps->Props',ownProps);    
    console.log('dispatch log ',dispatch,getState);
    dispatch({type:actions.LOGIN_START});
    
    axios.post('https://reqres.in/api/login', {
                    email: email,
                    password: password
                  })
                  .then(function (response) {
                    console.log(response);

                    dispatch({type:actions.LOGIN_ACTION,payload:response.data.token});
                    let { from } = ownProps.location.state || { from: { pathname:'/'} };  
                    ownProps.history.push(from);
                  })
                  .catch(function (error) {
                    console.log('error in Catch block',error);
                    dispatch({type:actions.LOGIN_ERROR,payload:error.response.data.error});
                  });            
              
});
}
export default performLogin