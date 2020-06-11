import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));