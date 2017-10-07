import { combineReducers, createStore } from 'redux';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case 'test': {
        return { ...state, ...action.payload };
    }
    default: {
        return state;
    }
    }
};

const reducers = combineReducers({
    test: reducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
export default store;
