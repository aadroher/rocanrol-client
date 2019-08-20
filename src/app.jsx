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
import SongDetailContainer from './containers/song-detail-container';
import Layout from './components/layout';

import theme from './styles/theme';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route
                exact
                path="/songs"
                render={props => <SongListContainer {...props} />}
              />
              <Route
                exact
                path="/songs/page/:pageNum"
                render={props => <SongListContainer {...props} />}
              />
              <Route
                path="/song/:id"
                render={props => <SongDetailContainer {...props} />}
              />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;