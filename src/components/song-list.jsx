import React, { useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import SongCardContainer from '../containers/song-card-container';
import AudioPlayerContainer from '../containers/audio-player-container';

const useStyles = makeStyles(theme => ({
  container: {
    'padding-top': '100px',
  },
}));

const SongList = ({ songs = [], loadSongs }) => {
  useEffect(() => {
    loadSongs();
  }, []);
  const { container } = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            <span role="img">🤘</span> rocanrol
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={container} xs={12} maxWidth="md">
        <Grid container direction="column" spacing={2}>
          {songs.map(({ id, title, author, isSelected, isPlaying }) => (
            <Grid key={id} xs item>
              <SongCardContainer
                id={id}
                title={title}
                author={author}
                isSelected={isSelected}
                isPlaying={isPlaying}
              />
            </Grid>
          ))}
        </Grid>
        <AudioPlayerContainer />
      </Container>
    </>
  );
};
export default SongList;
