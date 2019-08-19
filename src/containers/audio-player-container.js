import { connect } from 'react-redux';
import AudioPlayer from '../components/audio-player';

const mapStateToProps = ({ selectedSong: { isPlaying, url } }) => ({
  src: url,
  isPlaying,
});

export default connect(mapStateToProps)(AudioPlayer);
