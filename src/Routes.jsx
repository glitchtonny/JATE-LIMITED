import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
//import Blog from '';
//import Login from '';
//import Signup from '';
import NavBar from './NavBar';

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/HomePage" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default Routes;
