import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  }
})

class RoleTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs 
              value={this.state.value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullwidth="true"
            >
              <Tab label="Customer" component={Link} to="/customer" />
              <Tab label="Merchant" component={Link} to="/merchant" />
            </Tabs>
          </AppBar>

          <Switch>
            <Route path="/customer" component={ItemCustomer} />
            <Route path="/merchant" component={ItemMerchant} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

RoleTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function ItemCustomer(theme) {
  return (
    <Paper>
      <div>Item Customer</div>
    </Paper>
  );
}

function ItemMerchant(theme) {
  return (
    <Paper>
      <div>Item Merchant</div>
    </Paper>
  );
}

export default withStyles(styles, { withTheme: true })(RoleTab);