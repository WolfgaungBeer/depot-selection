import { SET_SELECTED_FILE, DELETE_SELECTED_FILE, SET_USER_APP_DIR } from './actionTypes';

export const setSelectedFile = payload => ({ type: SET_SELECTED_FILE, payload });
export const deleteSelectedFile = () => ({ type: DELETE_SELECTED_FILE });
export const setUserAppDir = payload => ({ type: SET_USER_APP_DIR, payload });
