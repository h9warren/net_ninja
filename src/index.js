import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

