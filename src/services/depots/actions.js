import { ADD_DEPOT, EDIT_DEPOT, DELETE_DEPOT } from './actionTypes';

export const addDepot = payload => ({ type: ADD_DEPOT, payload });
export const editDepot = payload => ({ type: EDIT_DEPOT, payload });
export const deleteDepot = payload => ({ type: DELETE_DEPOT, payload });
