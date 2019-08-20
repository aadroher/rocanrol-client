import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSongs } from '../actions';
import SongList from '../components/song-list';

const addPlayState = ({ songs, selectedSong }) => {
  const { id: selectedSongId, isPlaying: selectedSongIsPlaying } = selectedSong;
  return songs.map(song => {
    const { id: songId } = song;
    const isSelected = songId === selectedSongId;
    const isPlaying = isSelected && selectedSongIsPlaying;
    return {
      ...song,
      isSelected,
      isPlaying,
    };
  });
};

const mapStateToProps = ({ songs, selectedSong }) => ({
  songs: addPlayState({ songs, selectedSong }),
});

const mapDispatchToProps = dispatch => ({
  loadSongs: () => {
    dispatch(fetchSongs(0));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SongList)
);
