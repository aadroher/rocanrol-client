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
  dispatch(receiveSongsOk(pageNumber));

  const response = await window.fetch(`/songs?page=${pageNumber}`);
  if (response.ok) {
    console.log(response);
    const { songs } = await response.json();
    dispatch(receiveSongsOk(pageNumber, songs));
  } else {
    const msg = `${response.status} - ${response.statusText}`;
    dispatch(receiveSongsError(new Error(msg)));
  }
};
