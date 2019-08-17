import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Grade';
import ReedemIcon from '@material-ui/icons/Redeem';
import Grid from '@material-ui/core/Grid';

const style = (theme) => ({
  card: {
    maxWidth: 345,
  },
  title: {
    margin: theme.spacing(2, 1, 1),
  },
  icon: {
    margin: theme.spacing(0, 1, 1),
  },
  text: {
    margin: theme.spacing(0, 0, 1),
  },
  price: {
    margin: theme.spacing(1),
  }
});

class CustomerCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom 
            variant="h5" 
            component="h2"
          >
            Dwiferdio Seagal Putra
          </Typography>
          <Typography 
            className={classes.price}
            gutterBottom 
            variant="body1" 
            color="textSecondary"
          >
            Rp 120.000
          </Typography>
          <Grid container direction="row" alignItems="center">
            <Grid item className={classes.icon}>
              <StarIcon color="action" />
            </Grid>
            <Grid item className={classes.text}>
              <Typography variant="caption">
                68.910 points
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item className={classes.icon}>
              <ReedemIcon color="action" />
            </Grid>
            <Grid item className={classes.text}>
              <Typography variant="caption">
                364 loyalty
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            className={classes.topup}
            href="/topup"
            size="small"
            color="primary"
            variant="contained"
            fullWidth
          >
            Top Up
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style, { withTheme: true })(CustomerCard);