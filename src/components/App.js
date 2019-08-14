import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LogInPage from './LogInPage/LogInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import NavBar from './NavBar';

import '../assets/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" component={LogInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Router>
    );
  }
}

export default App;
