import React from 'react';

import { authenticationService } from '../../services';

import NavBar from '../NavBar';
import CustomerCard from '../CustomerCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        <Grid container spacing={2}>
          <Grid item xs>
            {/* TODO: Insert props with name and balance based on user data */}
            <CustomerCard />
          </Grid>
          <Grid item xs={6}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;