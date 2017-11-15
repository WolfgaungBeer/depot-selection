import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { reducer as scadoReducer, themeActions } from 'scado';
import { reducer as routerReducer, updateRoute } from 'routerSvc';
import { reducer as depotReducer } from 'depotSvc';
import { reducer as stockReducer } from 'stockSvc';
import { reducer as chartReducer } from 'chartsSvc';
import { reducer as systemReducer, setupSystemEventListener, getUserAppDir } from 'systemSvc';
import history from './history';
import theme from './theme';

const reducers = combineReducers({
    form: formReducer,
    scado: scadoReducer,
    router: routerReducer,
    depots: depotReducer,
    stocks: stockReducer,
    chart: chartReducer,
    system: systemReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const getInitialState = () => {
    const store = localStorage.getItem('state');
    if (store) return JSON.parse(store);
    return undefined;
};

const store = createStore(reducers, getInitialState(), composeEnhancers(applyMiddleware(thunk, logger)));

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('state', JSON.stringify(state));
});

history.listen(location => store.dispatch(updateRoute(location)));
store.dispatch(themeActions.setTheme(theme));
setupSystemEventListener(store.dispatch);
getUserAppDir();

export default store;
