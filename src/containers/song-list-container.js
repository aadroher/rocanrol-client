import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import SongList from '../components/song-list';

const mapStateToProps = ({ songs }) => ({ songs });

const mapDispatchToProps = dispatch => ({
  loadSongs: () => {
    dispatch(fetchSongs(0));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
