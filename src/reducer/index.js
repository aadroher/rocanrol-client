import { RECEIVE_SONGS_OK, PLAY_SONG, PAUSE_SONG } from '../actions';
import { newExpression } from '@babel/types';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const currentPageNumber = (currentPageNumber = 0, action) => {
  console.log(action);
  const { type, currentPageNumber: newCurrentPageNumber } = action;
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newCurrentPageNumber;
    default:
      return currentPageNumber;
  }
};

const numPages = (numPages = 0, { type, numPages: newNumPages }) => {
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newNumPages;
    default:
      return numPages;
  }
};

const songs = (songs = [], { type, songs: newSongs }) => {
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newSongs;
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

// const reducer = combineReducers({
//   selectedSong,
//   currentPageNumber,
//   numPages,
//   songs,
// });

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    selectedSong,
    currentPageNumber,
    numPages,
    songs,
  });

export default createRootReducer;
