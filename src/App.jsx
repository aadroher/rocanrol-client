import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

import SongListContainer from './containers/song-list-container';
import Song from './components/song';

import './App.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/songs" component={SongListContainer} />
      <Route path="/song/:id" component={Song} />
    </Router>
  </Provider>
);

export default App;
