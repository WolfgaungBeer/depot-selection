import initialState from './initialState';
import { UPDATE_ROUTE } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_ROUTE: {
        return { ...state, ...action.payload };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
