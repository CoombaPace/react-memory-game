import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    width: 190,
    maxWidth: 320,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 20,
    // boxShadow: `1px 3px 1px #9ABCC2`,

  },
  media: {
    height: 240,
  },
};

function MediaCard(props) {
  const {classes} = props;

  return (
    <Card className={classes.card}
    onClick={() => props.setClicked(props.id)}
    >
        <CardMedia
          className={classes.media}
          image={props.image} alt={props.charname}
        />
    </Card>
  );
}

export default withStyles(styles)(MediaCard)