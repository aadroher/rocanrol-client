import { RECEIVE_SONGS_OK, PLAY_SONG, PAUSE_SONG, END_SONG } from '../actions';
import { combineReducers } from 'redux';

const currentPageNumber = (currentPageNumber = 0, action) => {
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
    case PAUSE_SONG:
    case END_SONG: {
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
  currentPageNumber,
  numPages,
  songs,
});

export default reducer;
