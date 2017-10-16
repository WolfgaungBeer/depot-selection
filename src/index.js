import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './scenes/App';
import store from './store';
import history from './history';
import './global.css';

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

render(<Root />, document.getElementById('root'));
