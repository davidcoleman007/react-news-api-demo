import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App}/>
    </div>
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
