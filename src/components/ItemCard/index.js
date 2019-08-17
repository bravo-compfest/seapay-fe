import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = (theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    paddingTop: '56.25%',
  },
});

class ItemCard extends React.Component {
  
  render() {
    const { classes } = this.props;

    return(
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Hamburger"
            image="hamburger.jpg"
            title="Hamburger"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hamburger
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hamburger is an American food that have a good taste. It contains a beef, 
              some vegetables and many more.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style, { withTheme: true })(ItemCard);