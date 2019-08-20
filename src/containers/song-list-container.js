import { connect } from 'react-redux';

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

const mapStateToProps = (
  { currentPageNumber, numPages, songs, selectedSong },
  ownProps
) => ({
  ...ownProps,
  currentPageNumber,
  numPages,
  songs: addPlayState({ songs, selectedSong }),
});

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { pageNum },
    },
  }
) => ({
  loadSongs: () => {
    dispatch(fetchSongs(pageNum));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
