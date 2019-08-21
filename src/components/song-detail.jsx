import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { makeStyles } from '@material-ui/styles';
import { ListItemText } from '@material-ui/core';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const SongDetail = props => {
  const {
    currentPageNumber,
    id,
    title,
    album,
    author,
    publisher,
    isPlaying,
    getOnPlayButtonClick,
    getOnPauseButtonClick,
  } = props;
  const { playIcon } = useStyles();

  const onIconButtonClick = isPlaying
    ? getOnPauseButtonClick(id)
    : getOnPlayButtonClick(id);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton
              component={AdapterLink}
              to={`/songs/page/${currentPageNumber}`}
            >
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm container direction="column">
            <Typography variant="h5">{title}</Typography>
            <List dense={true}>
              <ListItem disableGutters>
                <ListItemText primary={album} secondary="Album" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary={author} secondary="Author" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary={publisher} secondary="Publisher" />
              </ListItem>
            </List>
            <Grid item>
              <IconButton onClick={onIconButtonClick} aria-label="play/pause">
                {isPlaying ? (
                  <PauseIcon className={playIcon} />
                ) : (
                  <PlayArrowIcon className={playIcon} />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SongDetail;
