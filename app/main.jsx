import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import AppBar from './components/app-bar/AppBar';
import List from './containers/Home';
import store from './store/store.js';
import './assets/reset.css';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={List} />
    </HashRouter>
  </Provider>
), document.getElementById('app')
);
