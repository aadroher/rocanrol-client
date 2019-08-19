import {
  REQUEST_SONGS,
  RECEIVE_SONGS_OK,
  PLAY_SONG,
  PAUSE_SONG,
} from '../actions';
import { stat } from 'fs';
import { newExpression } from '@babel/types';

const intialState = {
  selectedSong: {
    id: null,
    isPlaying: false,
  },
  songs: [],
};

const addPlayState = ({ songs, selectedSong }) => {
  const { id: selectedSongId, isPlaying: selectedSongIsPlaying } = selectedSong;
  const newSongs = songs.map(song => {
    const { id: songId } = song;
    const isSelected = songId === selectedSongId;
    const isPlaying = isSelected && selectedSongIsPlaying;
    return {
      ...song,
      isSelected,
      isPlaying,
    };
  });
  return {
    songs: newSongs,
    selectedSong,
  };
};

const reducer = (state = intialState, action) => {
  console.log({ state, action });
  const { type } = action;
  switch (type) {
    case RECEIVE_SONGS_OK: {
      const { songs } = action;
      const withUpdatedSongs = {
        ...state,
        songs,
      };
      return addPlayState(withUpdatedSongs);
    }
    case PLAY_SONG: {
      const { id } = action;
      const selectedSong = {
        id,
        isPlaying: true,
      };
      const withUpdatedSelectedSong = {
        ...state,
        selectedSong,
      };
      return addPlayState(withUpdatedSelectedSong);
    }
    case PAUSE_SONG: {
      const { id } = action;
      const selectedSong = {
        id,
        isPlaying: false,
      };
      const withUpdatedSelectedSong = {
        ...state,
        selectedSong,
      };
      return addPlayState(withUpdatedSelectedSong);
    }
    default:
      return state;
  }
};

export default reducer;
