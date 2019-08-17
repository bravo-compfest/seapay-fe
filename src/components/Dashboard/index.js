import React from 'react';

import { authenticationService } from '../../services';

import NavBar from '../NavBar';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    }
  }

  componentDidMount() {
    const { currentUser } = this.state;
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1> Login Success </h1>
      </div>
    );
  }
}

export default Dashboard;