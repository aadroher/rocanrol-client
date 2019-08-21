export const REQUEST_SONGS = 'REQUEST_SONGS';
const requestSongs = pageNumber => ({
  type: REQUEST_SONGS,
  pageNumber,
});

export const RECEIVE_SONGS_OK = 'RECEIVE_SONGS_OK';
const receiveSongsOk = (pageNumber, payload) => ({
  type: RECEIVE_SONGS_OK,
  ...payload,
});

export const RECEIVE_SONGS_ERROR = 'RECEIVE_SONGS_ERROR';
const receiveSongsError = err => ({
  type: RECEIVE_SONGS_ERROR,
  err,
});

export const fetchSongs = pageNumber => async dispatch => {
  dispatch(requestSongs(pageNumber));

  const response = await window.fetch(`/api/songs?page=${pageNumber}`);
  if (response.ok) {
    const {
      page_number: currentPageNumber,
      num_pages: numPages,
      songs,
    } = await response.json();

    dispatch(
      receiveSongsOk(pageNumber, { currentPageNumber, numPages, songs })
    );
  } else {
    const msg = `${response.status} - ${response.statusText}`;
    dispatch(receiveSongsError(new Error(msg)));
  }
};

export const LOAD_SONG = 'LOAD_SONG';
export const loadSong = id => ({
  type: LOAD_SONG,
  id,
});

export const PLAY_SONG = 'PLAY_SONG';
export const playSong = id => ({
  type: PLAY_SONG,
  id,
});

export const PAUSE_SONG = 'PAUSE_SONG';
export const pauseSong = id => ({
  type: PAUSE_SONG,
  id,
});
