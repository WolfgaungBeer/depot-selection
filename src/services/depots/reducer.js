import v4 from 'uuid/v4';
import initialState from './initialState';
import { ADD_DEPOT, EDIT_DEPOT, DELETE_DEPOT } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_DEPOT: {
        const depots = [...state];
        const newDepot = { ...action.payload, id: v4() };
        depots.push(newDepot);
        return depots;
    }
    case EDIT_DEPOT: {
        const depots = state.filter(item => item.id !== action.payload.id);
        depots.push(action.payload);
        return depots;
    }
    case DELETE_DEPOT: {
        return state.filter(item => item.id !== action.payload);
    }
    default: {
        return state;
    }
    }
};

export default reducer;
