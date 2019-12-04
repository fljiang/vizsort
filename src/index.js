import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-4.3.1-dist/css/bootstrap.min.css';
import './bootstrap-4.3.1-dist/css/bootstrap-grid.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();