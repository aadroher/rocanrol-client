import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

import SongListContainer from './containers/song-list-container';
import Song from './components/song';

import theme from './styles/theme';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route path="/songs" component={SongListContainer} />
          <Route path="/song/:id" component={Song} />
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);

export default App;
