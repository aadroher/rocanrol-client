import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/songs" component={SongListContainer} />
            <Route path="/songs/:id" component={Song} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
