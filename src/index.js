import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap-css/black-dashboard.css';
import 'bootstrap'
require('./assets/bootstrap-js/bundle');

ReactDOM.render(<HttpsRedirect><App /></HttpsRedirect>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
