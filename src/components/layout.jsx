import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import AudioPlayerContainer from '../containers/audio-player-container';
import TopBar from './top-bar';

const useStyles = makeStyles(theme => ({
  container: {
    'padding-top': '100px',
  },
}));

const Layout = ({ children }) => {
  const { container } = useStyles();
  return (
    <>
      <TopBar />
      <Container className={container} xs={12} maxWidth="md">
        {children}
      </Container>
      <AudioPlayerContainer />
    </>
  );
};

export default Layout;
