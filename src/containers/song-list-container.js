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

const mapStateToProps = ({ songs, selectedSong }, ownProps) => ({
  ...ownProps,
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

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(SongList)
// );
