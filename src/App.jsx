import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';

import SongList from './components/SongList';
import Song from './components/Song';

import './App.css';

const reducer = state => state;
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/songs" component={SongList} />
      <Route path="/song/:id" component={Song} />
    </Router>
  </Provider>
);

export default App;
