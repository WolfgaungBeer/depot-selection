import { SET_SELECTED_DEPOT, UNSET_SELECTED_DEPOT } from './actionTypes';

export const setSelectedDepot = payload => ({ type: SET_SELECTED_DEPOT, payload });
export const unsetSelectedDepot = payload => ({ type: UNSET_SELECTED_DEPOT, payload });
