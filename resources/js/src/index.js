import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import '../../css/app.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>
  , document.getElementById('app'));
