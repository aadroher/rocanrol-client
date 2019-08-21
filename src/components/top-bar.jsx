import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const TopBar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">
        <span role="img" aria-label="Sign of the Horns">
          🤘
        </span>{' '}
        rocanrol
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
