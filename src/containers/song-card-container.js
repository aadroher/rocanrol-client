import { connect } from 'react-redux';
import { loadSong, playSong, pauseSong } from '../actions';
import SongCard from '../components/song-card';

const mapStateToProps = (_, { id, title, author, isSelected, isPlaying }) => ({
  id,
  title,
  author,
  isSelected,
  isPlaying,
});

const mapDispatchToProps = (dispatch, { isSelected }) => ({
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
)(SongCard);
