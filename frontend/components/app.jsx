
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar/navbar';


const App = () => (
  <div>
    <Modal />
    <Navbar />
    <br/>
    <header>
      <h1 className="splash-header">Medium is a place to write, read, and connect</h1>
        <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
      {/* <Link to="/" style={{ textDecoration: 'none' }}className="header-link">
        <h1 className={"splashlogo"}>Shmedium: one size fits most</h1> */}
      {/* </Link> */}
      <GreetingContainer />
      
    </header>
    <Switch>
      <Route exact path="/" />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;

