export const REQUEST_SONGS = 'REQUEST_SONGS';
const requestSongs = pageNumber => ({
  type: REQUEST_SONGS,
  pageNumber,
});

export const RECEIVE_SONGS_OK = 'RECEIVE_SONGS_OK';
const receiveSongsOk = (pageNumber, songs) => ({
  type: RECEIVE_SONGS_OK,
  songs,
});

export const RECEIVE_SONGS_ERROR = 'RECEIVE_SONGS_ERROR';
const receiveSongsError = err => ({
  type: RECEIVE_SONGS_ERROR,
  err,
});

export const fetchSongs = pageNumber => async dispatch => {
  dispatch(requestSongs(pageNumber));

  const response = await window.fetch(`/songs?page=${pageNumber}`);
  if (response.ok) {
    const { songs } = await response.json();
    dispatch(receiveSongsOk(pageNumber, songs));
  } else {
    const msg = `${response.status} - ${response.statusText}`;
    dispatch(receiveSongsError(new Error(msg)));
  }
};

export const PLAY_SONG = 'PLAY_SONG';
export const playSong = id => ({
  type: PLAY_SONG,
  id,
});
