import { RECEIVE_SONGS_OK } from '../../actions';
import songsReducer from '../../reducer/songs';

describe('songs reducer', () => {
  const songs = ['existing', 'songs'];
  const newSongs = ['new', 'songs'];

  it('makes the state default to an empty array when it is not defined', () => {
    const newState = songsReducer(undefined, {
      type: 'SOME_OTHER_ACTION',
    });

    expect(newState).toEqual([]);
  });

  it('returns the new songs when the action is of type RECEIVE_SONGS_OK', () => {
    const newState = songsReducer(songs, {
      type: RECEIVE_SONGS_OK,
      songs: newSongs,
    });

    expect(newState).toEqual(newSongs);
  });

  it('returns the old songs when the action is of a different type', () => {
    const newState = songsReducer(songs, {
      type: 'SOME_OTHER_ACTION',
      songs: newSongs,
    });

    expect(newState).toEqual(songs);
  });
});
