import { connect } from 'react-redux';
import { playSong, pauseSong } from '../actions';
import SongCard from '../components/song-card';

const mapStateToProps = (_, { id, title, author, isSelected, isPlaying }) => ({
  id,
  title,
  author,
  isSelected,
  isPlaying,
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
)(SongCard);
