import React from 'react';
import { Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { history } from '../../helpers';

import LoginPage from '../LoginPage/LoginPage';
import SignUpCustomerPage from '../SignUpCustomerPage/SignUpCustomerPage';
import TopUpPage from '../TopUpPage/TopUpPage';
import TransferPage from '../TransferPage';
import Dashboard from '../Dashboard';
import RolePage from '../RolePage';
import CustomerCard from '../CustomerCard';
import ItemCard from '../ItemCard';

import '../../assets/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: false,
    }
  }

  componentDidMount(){
    // authenticationService.currentUser.subscribe(user => {
    //   this.setState({
    //   currentUser: user,
    // })})
    this.setState({ isAuthenticated: localStorage.getItem('isAuthenticated')});
  }

  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={RolePage} />
        <Route exact path="/signup/customer" component={SignUpCustomerPage} />
        <Route exact path="/topup" component={TopUpPage} />
        <Route exact path="/transfer" component={TransferPage} />
        <Route exact path="/customer-card" component={CustomerCard} />
        <Route exact path="/item-card" component={ItemCard} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
