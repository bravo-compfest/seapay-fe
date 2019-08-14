import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const style = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#333333',
  },
  appbar: {
    boxShadow: 'none',
    background: 'transparent',
  },
});

class NavBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SEA PAY
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style, { withTheme: true })(NavBar);