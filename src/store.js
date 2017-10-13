import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import history from './history';
import { reducer as routerReducer, updateRoute } from './services/router';

const reducers = combineReducers({
    router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

history.listen(location => store.dispatch(updateRoute(location)));

export default store;
