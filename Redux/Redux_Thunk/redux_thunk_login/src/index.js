import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Navbar from './Navbar';

import Login from './Login';
import NoMatch from './NoMatch';
import {NavRoutes} from './NavRoutes';
import {PrivateRoute} from './PrivateRoute';
import NoMatchExample from './NoMatchExample';

import {Home,About,ContactUs} from './Components';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import User from './User';
import App from './App';
import appStore from './store/AppStore';
import {Provider} from 'react-redux';
/*
function User(props) {
  console.log(props);
  return <h1>Hello {props.match.params.username}!</h1>;
}
 <Route  path="/courses/:course"><CourseDetail/></Route>
*/

ReactDOM.render(
  <Provider store = {appStore}>
    <App/>
  </Provider>  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
