import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {LogInPage} from './LogInPage';
import SignUpPage from './SignUpPage/SignUpPage';

import '../assets/bootstrap.min.css';
import '../assets/App.css';

//TODO: Separate this, it's only for temporary
function HomePage() {
  return (
    <h1>Work In Progress 🚧</h1>
  );
}

//TODO: Separate this, change to material-ui.
function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">SEA-PAY</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/login" className="nav-item nav-link">Log In</Link>
          <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LogInPage} />
      <Route path="/signup" component={SignUpPage} />
    </Router>
  );
}

export default App;
