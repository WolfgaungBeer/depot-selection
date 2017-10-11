import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './scenes/App';
import store from './store';
import './global.css';

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

render(<Root />, document.getElementById('root'));
