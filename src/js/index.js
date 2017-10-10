import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './components/App';
import '../sass/index.scss';

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

render(<Root />, document.getElementById('root'));