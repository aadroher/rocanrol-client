import { RECEIVE_SONGS_OK, PLAY_SONG, PAUSE_SONG, END_SONG } from '../actions';
import { newExpression } from '@babel/types';
import { combineReducers } from 'redux';

import selectedSong from './selected-song';
import numPages from './num-pages';
import currentPageNumber from './current-page-number';
import songs from './songs';

const reducer = combineReducers({
  selectedSong,
  numPages,
  currentPageNumber,
  songs,
});

export default reducer;
