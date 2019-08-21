import { RECEIVE_SONGS_OK } from '../actions';

const songs = (songs = [], { type, songs: newSongs }) => {
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newSongs;
    default:
      return songs;
  }
};

export default songs;
