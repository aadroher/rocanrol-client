import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createRootReducer from './reducer';

import SongListContainer from './containers/song-list-container';
import SongDetailContainer from './containers/song-detail-container';
import Layout from './components/layout';

import theme from './styles/theme';

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
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
      </Provider>
    </ThemeProvider>
  </>
);

export default App;
