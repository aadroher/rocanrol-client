import React from 'react';
import { Link } from 'react-router-dom';
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

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
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

const SongCard = ({
  id,
  title,
  author,
  isPlaying,
  onPlayButtonClick,
  onPauseButtonClick,
}) => {
  const { playPauseIconButton, moreIconButton, playIcon } = useStyles();

  const onIconButtonClick = isPlaying ? onPauseButtonClick : onPlayButtonClick;

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton
            className={playPauseIconButton}
            onClick={onIconButtonClick}
            aria-label="play/pause"
          >
            {/* <PlayArrowIcon className={playIcon} /> */}
            {isPlaying ? (
              <PauseIcon className={playIcon} />
            ) : (
              <PlayArrowIcon className={playIcon} />
            )}
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
          <IconButton
            className={moreIconButton}
            component={AdapterLink}
            to={`/songs/${id}`}
          >
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SongCard;
