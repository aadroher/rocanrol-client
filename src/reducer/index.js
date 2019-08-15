import { REQUEST_SONGS, RECEIVE_SONGS_OK } from '../actions';
import { stat } from 'fs';

const intialState = {
  songs: [],
};

const reducer = (state = intialState, action) => {
  console.log({ state, action });
  const { type } = action;
  switch (type) {
    case RECEIVE_SONGS_OK:
      const { songs } = action;
      return {
        ...state,
        songs,
      };
    default:
      return state;
  }
};

export default reducer;
