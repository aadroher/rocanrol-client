import { connect } from 'react-redux';
import { playSong } from '../actions';
import SongCard from '../components/song-card';

const mapStateToProps = (_, { id, title, author, isPlaying }) => ({
  id,
  title,
  author,
  isPlaying,
});

const mapDispatchToProps = dispatch => ({
  onPlayButtonClick: id => {
    dispatch(playSong(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongCard);
