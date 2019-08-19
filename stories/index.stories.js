import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import theme from '../src/styles/theme';
import SongCard from '../src/components/song-card';

const id = 'da_souza-tot_es_aqui';

const onPlayButtonClick = () => {
  console.log(`onPlayButtonClick(${id})`);
};

const onPauseButtonClick = () => {
  console.log(`onPauseButtonClick(${id})`);
};

const defaultProps = {
  id,
  title: 'Tot és aqui',
  author: 'Da Souza',
  onPlayButtonClick,
  onPauseButtonClick,
};

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Router>{story()}</Router>
  </ThemeProvider>
));

storiesOf('SongCard', module)
  .add('default', () => <SongCard {...defaultProps} />)
  .add('with playing song', () => <SongCard {...defaultProps} isPlaying />);
