import React from 'react';
import Cms from './Cms';
import {Route,Switch} from 'react-router-dom';
import Login from './Login';
const App = () => (
  <div className="app-routes">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Cms} />
    </Switch>
  </div>
);

export default App;
