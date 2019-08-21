import { RECEIVE_SONGS_OK } from '../actions';

export default (currentPageNumber = 0, action) => {
  const { type, currentPageNumber: newCurrentPageNumber } = action;
  switch (type) {
    case RECEIVE_SONGS_OK:
      return newCurrentPageNumber;
    default:
      return currentPageNumber;
  }
};
