import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
export default store;
