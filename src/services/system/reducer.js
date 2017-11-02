import initialState from './initialState';
import { SET_SELECTED_FILE, DELETE_SELECTED_FILE, SET_USER_APP_DIR } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_SELECTED_FILE: {
        return { ...state, selectedPath: action.payload };
    }
    case DELETE_SELECTED_FILE: {
        return { ...state, selectedPath: null };
    }
    case SET_USER_APP_DIR: {
        return { ...state, userAppDir: action.payload };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
