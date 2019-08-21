import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { makeStyles } from '@material-ui/styles';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
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
  const { playIcon } = useStyles({
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
            <IconButton onClick={onIconButtonClick} aria-label="play/pause">
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
            <IconButton component={AdapterLink} to={`/song/${id}`}>
              <MoreHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SongCard;
