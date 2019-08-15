import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const SongList = ({ songs = [], loadSongs }) => {
  useEffect(() => {
    loadSongs();
  }, []);
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6">
            <span role="img">🤘</span> rocanrol
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <GridList cellHeight={180} cols={1}>
          {songs.map(({ id, title, author, url }) => (
            <GridListTile key={id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="subtitle1">{author}</Typography>
                </CardContent>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </div>
  );
};
export default SongList;
