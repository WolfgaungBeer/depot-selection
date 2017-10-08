const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;

ipc.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }, (files) => {
        if (files) event.sender.send('selected-directory', files);
    });
});
