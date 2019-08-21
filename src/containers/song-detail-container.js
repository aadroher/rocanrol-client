import { connect } from 'react-redux';
import { playSong, pauseSong } from '../actions';
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
  { currentPageNumber, songs, selectedSong },
  {
    match: {
      params: { id: selectedSongId },
    },
  }
) => ({
  currentPageNumber,
  ...getSongDetails({ songs, selectedSong }, selectedSongId),
});

const mapDispatchToProps = dispatch => ({
  getOnPlayButtonClick: id => () => {
    dispatch(playSong(id));
  },
  getOnPauseButtonClick: () => () => {
    dispatch(pauseSong());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
