import v4 from 'uuid/v4';
import initialState from './initialState';
import { ADD_STOCK, EDIT_STOCK, DELETE_STOCK } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_STOCK: {
        const stocks = [...state];
        const newStock = { ...action.payload, id: v4() };
        stocks.push(newStock);
        return stocks;
    }
    case EDIT_STOCK: {
        const stocks = state.filter(item => item.id !== action.payload.id);
        stocks.push(action.payload);
        return stocks;
    }
    case DELETE_STOCK: {
        return state.filter(item => item.id !== action.payload);
    }
    default: {
        return state;
    }
    }
};

export default reducer;
