import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const SongCard = ({ title, author }) => {
  const { card, details, content, controls, playIcon } = useStyles();
  return (
    <Card className={card}>
      <div className={content}>
        <CardContent className={details}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{author}</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SongCard;
