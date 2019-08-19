import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../src/styles/theme';
import SongCard from '../src/components/song-card';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

storiesOf('SongCard', module).add('default', () => (
  <SongCard title="Tot és avui" author="Da Souza" />
));
