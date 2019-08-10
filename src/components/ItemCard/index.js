import React from 'react';
import Typography from '@material-ui/core/Typography';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Typography>
        This is a card.
      </Typography>
    );
  }
}

export default ItemCard;