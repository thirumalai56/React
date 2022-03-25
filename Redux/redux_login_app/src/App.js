import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Redirect} from 'react-router-dom';
import LoginForm from './login/LoginForm';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';

import Navbar from './Navbar';


import NoMatch from './NoMatch';

function App() {
  
  return (
    
    <Router>
       <Switch>
          <Route  path="/login"><LoginForm/></Route>
          <PrivateRoute  path="/"><Navbar/></PrivateRoute> 
       </Switch>

   </Router>
    
  );
}
function PrivateRoute({ children, ...rest }){
  console.log(children);
  console.log('User-->',window.localStorage.getItem("user"));
  console.log(window.localStorage.getItem("user")!=null);
 return ( <Route
  {...rest}
  render={({ location }) =>
    window.localStorage.getItem("user") ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    )
  }
/>
);
  
}


export default App;
