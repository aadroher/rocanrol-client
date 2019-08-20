import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import { loadSong, playSong, pauseSong } from '../actions';
import SongDetail from '../components/song-detail';

const getSongDetails = (
  {
    songs,
    selectedSong: { id: selectedSongId, isPlaying: selectedSongIsPlaying },
  },
  songId
) => {
  const song = songs.find(({ id }) => id === songId) || {};
  const isSelected = songId === selectedSongId;
  const isPlaying = isSelected && selectedSongIsPlaying;
  return {
    ...song,
    isSelected,
    isPlaying,
  };
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id: selectedSongId },
    },
  }
) => getSongDetails(state, selectedSongId);

const mapDispatchToProps = (dispatch, { isSelected }) => ({
  loadSongs: () => {
    dispatch(fetchSongs(0));
  },
  getOnPlayButtonClick: id => () => {
    if (!isSelected) {
      dispatch(loadSong(id));
    }
    dispatch(playSong(id));
  },
  getOnPauseButtonClick: id => () => {
    dispatch(pauseSong(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
