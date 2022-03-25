import React from 'react';
import {useHistory,useRouteMatch,useLocation} from 'react-router-dom';
import LoginForm from './login/LoginForm';
function Login({props}){
    let history = useHistory();
    console.log("Location is ",history);
    console.log(history.location.state);
    

    return (
        <>
        <div>
            <LoginForm/>
        <h1>Login</h1>
        </div>
        <div>
        <button onClick={()=> {
            window.localStorage.setItem("user","Raju");
            history.push("/");
            }
        }> Login</button>
        </div>
        </>
    );

}
export default Login;