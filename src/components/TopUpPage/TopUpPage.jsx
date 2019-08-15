import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

function TopUpPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">
              Top Up Balance
            </Typography>
            <TextField
              id="outlined-number"
              label="Nominal"
              value="0"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
            <Grid container justify="flex-start">
              <Button variant="contained" spacing={3} color="primary">
                Top Up
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopUpPage;