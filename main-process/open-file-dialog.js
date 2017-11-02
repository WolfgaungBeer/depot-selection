const { ipcMain, dialog, app } = require('electron');

ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({ properties: ['openFile'] }, (files) => {
        if (!files) event.sender.send('no-selected-file');
        if (files) event.sender.send('selected-file', files);
    });
});

ipcMain.on('get-app-data-dir', (event) => {
    const appData = app.getPath('appData');
    event.sender.send('app-data-dir', appData);
});
