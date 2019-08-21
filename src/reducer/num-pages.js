import { RECEIVE_SONGS_OK } from '../actions';

export default (numPages = 0, { type, numPages: newNumPages }) => {
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newNumPages;
    default:
      return numPages;
  }
};
