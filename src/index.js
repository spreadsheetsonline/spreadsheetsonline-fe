import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap-css/black-dashboard.css';
import 'bootstrap'
require('./assets/bootstrap-js/bundle');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
