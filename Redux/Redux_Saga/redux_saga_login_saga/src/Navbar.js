import React,{useState} from 'react';
import {Link,withRouter,NavLink,Route,Redirect,Switch,useRouteMatch,useHistory} from 'react-router-dom';
import {Home,About,ContactUs} from './Components';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import {NavRoutes} from './NavRoutes';
import {PrivateRoute} from './PrivateRoute';
import NoMatchExample from './NoMatchExample';
import NoMatch from './NoMatch';
import User from './User';
import './App.css';
import {useDispatch} from 'react-redux';
import * as actions from './constants/actionTypes';
import BookSearch from './components/BookSearch';

function Navbar(){
    const dispatch = useDispatch();
    /*
    let loggedInUser  = window.localStorage.getItem("user");
    console.log("loggedInUser" ,loggedInUser);
    let path =  useHistory();
    console.log('Last History is ==> ',path);
    let {previousPath,setPreviousPath} = useState(path);
    */
    return (
        <div>
        <div className="navbar">
           <div className="nav-header">
            <h1> React Router</h1>
           </div>
            <div className="nav-div">
            <ul className="nav-link">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/contactus">ContactUs</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/logout">Logout</Link></li>                
            </ul>
            </div>
        </div>
        <div>
            <Switch>
                    <Route  exact path="/" exact><Home/></Route>
                    <Route  path="/about"><About/></Route>
                    <Route  path="/contactus"><ContactUs/></Route>
                    <Route  path="/books" component={BookSearch}/>
                    <Route  path="/user/:username" component={User} /> 
                    <Route  path="/courses"><Courses/></Route>
                    <Route  path="/logout" render={
                                        (props)=>{ 
                                            console.log("Logout",props);
                                            dispatch({type:actions.LOGOUT});
                                            window.localStorage.removeItem("user");
                                            return <Redirect to="/login"/>
                                                }
                                    }>
                    </Route>
                    <Route  path="*" component={NoMatch}></Route>
                </Switch>
        </div>
    </div>
    );

}

export default withRouter(Navbar);