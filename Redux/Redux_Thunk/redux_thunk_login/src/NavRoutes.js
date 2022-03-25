import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home,About,ContactUs} from './Components';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import User from './User';
import NoMatch from './NoMatch';
export const NavRoutes = () => (
     <>
      <Route  exact path="/" exact><Home/></Route>
      <Route  path="/about"><About/></Route>
      <Route  path="/contactus"><ContactUs/></Route>
      <Route  path="/courses"><Courses/></Route>
      <Route  path="/courses/:course" component= {CourseDetail}></Route>
      <Route  path="/user/:username" component={User} /> 
      <Route  path="*" component={NoMatch}></Route>
    </>
  )
