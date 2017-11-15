import initialState from './initialState';
import { SET_SELECTED_DEPOT, UNSET_SELECTED_DEPOT } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_SELECTED_DEPOT: {
        return { selectedDepot: action.payload };
    }
    case UNSET_SELECTED_DEPOT: {
        return { selectedDepot: null };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
