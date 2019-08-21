import { RECEIVE_SONGS_OK } from '../../actions';
import currentPageNumberReducer from '../../reducer/current-page-number';

describe('currentPageNumber reducer', () => {
  const currentPageNumber = 23;
  const newCurrentPageNumber = 42;

  it('makes the state default to an empty array when it is not defined', () => {
    const newState = currentPageNumberReducer(undefined, {
      type: 'SOME_OTHER_ACTION',
    });

    expect(newState).toEqual(0);
  });

  it('returns the new currentPageNumber when the action is of type RECEIVE_SONGS_OK', () => {
    const newState = currentPageNumberReducer(currentPageNumber, {
      type: RECEIVE_SONGS_OK,
      currentPageNumber: newCurrentPageNumber,
    });

    expect(newState).toEqual(newCurrentPageNumber);
  });

  it('returns the old currentPageNumber when the action is of a different type', () => {
    const newState = currentPageNumberReducer(currentPageNumber, {
      type: 'NAH_NOT_WHAT_YOU_EXPECT',
      currentPageNumber: newCurrentPageNumber,
    });

    expect(newState).toEqual(currentPageNumber);
  });
});
