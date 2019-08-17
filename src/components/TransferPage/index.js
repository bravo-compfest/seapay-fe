import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
}));

function TransferPage() {
  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
        <Typography variant="h5">
          Transfer Balance
        </Typography>
        {/* TODO: Add form and api request */}
        <TextField
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
          id="number"
          label="Nominal"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <div>
          <Button variant="contained" color="primary">
            Transfer
          </Button>
        </div>
      </Paper>
  );
}

export default TransferPage;