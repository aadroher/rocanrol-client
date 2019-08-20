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
  // paper: {
  //   backgroundColor: ({ isSelected }) => {
  //     console.log(theme)
  //     console.log('style hook', { isSelected });
  //     const { palette }
  //     return isSelected ? theme.primary : theme.secon;
  //   },
  // },
  // playPauseIconButton: {
  //   margin: theme.spacing(1),
  // },
  // moreIconButton: {
  //   margin: theme.spacing(1),
  // },
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
  isSelected,
  getOnPlayButtonClick,
  getOnPauseButtonClick,
}) => {
  const { playPauseIconButton, moreIconButton, playIcon } = useStyles({
    isSelected,
  });

  const onIconButtonClick = isPlaying
    ? getOnPauseButtonClick(id)
    : getOnPlayButtonClick(id);

  return (
    <Card raised={isSelected}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton
              className={playPauseIconButton}
              onClick={onIconButtonClick}
              aria-label="play/pause"
            >
              {isPlaying ? (
                <PauseIcon className={playIcon} />
              ) : (
                <PlayArrowIcon className={playIcon} />
              )}
            </IconButton>
          </Grid>
          <Grid item xs={12} sm container direction="column">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{author}</Typography>
          </Grid>
          <Grid item>
            <Link to={`/songs/${id}`}> song</Link>
            <IconButton
              className={moreIconButton}
              component={AdapterLink}
              to={`/songs/${id}`}
            >
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SongCard;
