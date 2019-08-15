import React from 'react';

const Song = ({
  match: {
    params: { id },
  },
}) => <div>song {id}</div>;

export default Song;
