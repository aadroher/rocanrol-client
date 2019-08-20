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

class DebugRouter extends Router {
  constructor(props) {
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null, 2));
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(
        `The last navigation action was ${action}`,
        JSON.stringify(this.history, null, 2)
      );
    });
  }
}

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DebugRouter>
          <Router>
            <Switch>
              <Route path="/songs/:id" component={Song} />
              <Route exact path="/songs" component={SongListContainer} />
            </Switch>
          </Router>
        </DebugRouter>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;
