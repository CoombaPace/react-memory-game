import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: 700,
    padding: 0,
    marginBottom: 20,
    textAlign: "center",
  },
  media: {
    height: 240,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 48,
  },
  subText: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        
            <CardMedia
            className={classes.media}
            image="./images/me_pixel_title.jpeg"
            title="mini pixel art mass effect squad mates"
            />
            <Typography className={classes.title} variant="h5" component="h2">
                {bull}
                Memory Clicky Game
                {bull}
            </Typography>
        <Typography className={classes.subText} color="textSecondary" variant="body2" component="p">
          Click Each Image Only Once
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}