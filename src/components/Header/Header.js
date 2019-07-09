import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import "./header.css";


const styles = {
  card: {
    boxShadow: "none",
    minWidth: 275,
    width: 700,
    padding: 0,
    marginBottom: 20,
    textAlign: "center",
    background: "none",
  },
  media: {
    height: 240,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 0,
  },
};

function SimpleCard(props) {
  const {classes} = props;
  const bull = <span className={classes.bullet}>•</span>;
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className="glow" score={props.score} topScore={props.topScore}>
          score: {props.score} {bull} top score: {props.topScore}
        </div>
        
        <CardMedia
        className={classes.media}
        image="./images/ME_Pixel_Title.png"
        />
        <div className="title">
            {bull} Memory Clicky Game {bull}
        </div>
        <div className="subText" color="textSecondary">
            Click Each Image Only Once
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default withStyles(styles)(SimpleCard)