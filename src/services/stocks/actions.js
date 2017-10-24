import { ADD_STOCK, EDIT_STOCK, DELETE_STOCK } from './actionTypes';

export const addStock = payload => ({ type: ADD_STOCK, payload });
export const editStock = payload => ({ type: EDIT_STOCK, payload });
export const deleteStock = payload => ({ type: DELETE_STOCK, payload });
