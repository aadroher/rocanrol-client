import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import PlayPauseButton from './play-pause-button';

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const SongDetail = ({
  currentPageNumber,
  title,
  album,
  author,
  publisher,
  isPlaying,
  onPlayButtonClick,
  onPauseButtonClick,
}) => (
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
            <PlayPauseButton
              isPlaying={isPlaying}
              onPlayButtonClick={onPlayButtonClick}
              onPauseButtonClick={onPauseButtonClick}
            />
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SongDetail;
