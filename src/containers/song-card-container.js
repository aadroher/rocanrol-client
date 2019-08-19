import { connect } from 'react-redux';
import { playSong, pauseSong } from '../actions';
import SongCard from '../components/song-card';

const mapStateToProps = (_, { id, title, author, isPlaying }) => ({
  id,
  title,
  author,
  isPlaying,
});

const mapDispatchToProps = dispatch => ({
  getOnPlayButtonClick: id => () => {
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
