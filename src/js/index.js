import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../sass/index.scss';

const Root = () => (
    <Provider store={store}>
        <h1>Hello World!!!</h1>
    </Provider>
);

render(<Root />, document.getElementById('root'));
