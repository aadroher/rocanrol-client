import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SongCardContainer from '../containers/song-card-container';
import PaginationContainer from '../containers/pagination-container';

const SongList = ({
  currentPageNumber,
  numPages,
  songs,
  loadSongs,
  match: { url },
}) => {
  useEffect(() => {
    loadSongs();
  }, [loadSongs, url]);

  return (
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
      <Grid item xs>
        <PaginationContainer />
      </Grid>
    </Grid>
  );
};
export default SongList;
