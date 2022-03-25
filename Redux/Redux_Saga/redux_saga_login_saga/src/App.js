import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter,Redirect} from 'react-router-dom';
import LoginForm from './login/LoginForm';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './Navbar';
import {withRouter} from 'react-router-dom';

import NoMatch from './NoMatch';
import LoginThunkForm from './login/LoginThunkForm';
import LoginSagaForm from './login/LoginSagaForm';

function App(props) {
  console.log('App Component -->',props,props.store.user);
  const {error} = props.store.user;
  let history = window.location;
  console.log("history object is ",history);
 /* useEffect(() => history.listen(() => {
    // do something on route change
    // for my example, close a drawer
  }), []); */
  return (
    <div>
      {/*
      <div>
        {error}
      </div>
      */}
      <div>
    <Router>
       <Switch>
          <Route  path="/login"  ><LoginSagaForm/></Route>
          <PrivateRoute  path="/"><Navbar/></PrivateRoute> 
       </Switch>

   </Router>
   </div>
   </div> 
  );
}
function PrivateRoute({ children, ...rest }){
  console.log('Helloworld ',children);
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
const mapStateToProps = (state) => {return {store :state}};

export default connect(mapStateToProps)(App);
