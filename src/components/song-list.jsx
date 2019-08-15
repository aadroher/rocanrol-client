import React, { useEffect } from 'react';

const SongList = ({ songs, loadSongs }) => {
  useEffect(() => {
    loadSongs();
  }, []);
  return (
    <div>
      <p>song list</p>
      <pre>{JSON.stringify(songs, null, 2)}</pre>
    </div>
  );
};
export default SongList;
