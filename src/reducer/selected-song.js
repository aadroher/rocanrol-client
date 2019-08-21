import { PLAY_SONG, PAUSE_SONG, END_SONG } from '../actions';

const initialState = {
  id: null,
  isPlaying: false,
};

export default (selectedSong = initialState, action) => {
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
