import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as scadoReducer, themeActions } from 'scado';
import { reducer as routerReducer, updateRoute } from 'routerSvc';
import history from './history';
import theme from './theme';

const reducers = combineReducers({
    scado: scadoReducer,
    router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

history.listen(location => store.dispatch(updateRoute(location)));
store.dispatch(themeActions.setTheme(theme));

export default store;
