import { ipcRenderer } from 'electron';
import { change } from 'redux-form';
import { setSelectedFile, deleteSelectedFile, setUserAppDir } from './actions';

export { default as reducer } from './reducer';
export * from './actions';

export const openFileDialog = () => ipcRenderer.send('open-file-dialog');
export const getUserAppDir = () => ipcRenderer.send('get-app-data-dir');

export const setupSystemEventListener = (dispatch) => {
    ipcRenderer.on('app-data-dir', (event, path) => dispatch(setUserAppDir(path)));
    ipcRenderer.on('no-selected-file', () => dispatch(deleteSelectedFile()));
    ipcRenderer.on('selected-file', (event, path) => {
        dispatch(setSelectedFile(path[0]));
        dispatch(change('stocks-form', 'dataPath', path[0]));
    });
};
