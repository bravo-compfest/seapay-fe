import React from 'react';

import NavBar from '../NavBar';
import CustomerCard from '../CustomerCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Container component="main">
        <NavBar />
        <div className={classes.paper}>
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
      </Container>
    );
  }
}

export default withStyles(style, { withTheme: true })(Dashboard);