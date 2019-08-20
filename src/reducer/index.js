import { RECEIVE_SONGS_OK, PLAY_SONG, PAUSE_SONG } from '../actions';
import { newExpression } from '@babel/types';
import { combineReducers } from 'redux';

const intialState = {
  selectedSong: {
    id: null,
    isPlaying: false,
    url: '',
  },
  songs: [],
};

const songs = (songs = [], action) => {
  const { type } = action;
  switch (type) {
    case RECEIVE_SONGS_OK: {
      const { songs: newSongs } = action;
      return newSongs;
    }
    default:
      return songs;
  }
};

const initialSelectedSong = {
  id: null,
  isPlaying: false,
};

const selectedSong = (selectedSong = initialSelectedSong, action) => {
  const { type } = action;
  switch (type) {
    case PLAY_SONG: {
      const { id } = action;
      return {
        id,
        isPlaying: true,
      };
    }
    case PAUSE_SONG: {
      return {
        ...selectedSong,
        isPlaying: false,
      };
    }
    default:
      return selectedSong;
  }
};

const reducer = combineReducers({
  selectedSong,
  songs,
});

export default reducer;
