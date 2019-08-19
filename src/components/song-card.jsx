import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playPauseIconButton: {
    margin: theme.spacing(1),
  },
  moreIconButton: {
    margin: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

// const SongCard = ({ title, author }) => {
//   const { card, details, content, controls, playIcon } = useStyles();
//   return (
//     <Card className={card}>
//       <div className={content}>
//         <CardContent classname={controls}>
// <IconButton aria-label="play/pause">
//   <PlayArrowIcon className={playIcon} />
// </IconButton>
//         </CardContent>
//         <CardContent className={details}>
// <Typography variant="h5">{title}</Typography>
// <Typography variant="subtitle1">{author}</Typography>
//         </CardContent>
//       </div>
//     </Card>
//   );
// };

const SongCard = ({ title, author }) => {
  const {
    card,
    details,
    content,
    controls,
    playPauseIconButton,
    iconButton,
    moreIconButton,
  } = useStyles();
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton className={iconButton} aria-label="play/pause">
            <PlayArrowIcon className={playPauseIconButton} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1">{author}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton className={moreIconButton}>
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SongCard;
