import { connect } from 'react-redux';
import { endSong } from '../actions';
import AudioPlayer from '../components/audio-player';

const getSrc = ({ selectedSongId, songs = [] }) => {
  const { url = '' } = songs.find(({ id }) => id === selectedSongId) || {};
  return url;
};

const mapStateToProps = ({ selectedSong: { id, isPlaying }, songs }) => ({
  src: getSrc({ selectedSongId: id, songs }),
  isPlaying,
});

const mapDispatchToProps = dispatch => ({
  onSongEnd: () => {
    dispatch(endSong());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
