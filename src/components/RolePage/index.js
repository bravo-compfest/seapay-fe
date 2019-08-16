import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const style = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  customer: {
    margin: theme.spacing(5, 0, 2),
  },
  merchant: {
    margin: theme.spacing(1, 0, 2),
  },
});

class RolePage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography gutterBottom component="h1" variant="h2">
              Sign Up
            </Typography>
            <Typography component="h1" variant="subtitle1">
              What do you want to be?
            </Typography>
            <Button
              className={classes.customer}
              href="/signup/customer"
              variant="contained"
              color="primary"
              fullWidth
            >
              Customer
            </Button>
            <Button
              className={classes.merchant}
              href="/signup/merchant"
              variant="contained"
              color="primary"
              fullWidth
            >
              Merchant
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(style, { withTheme: true })(RolePage);