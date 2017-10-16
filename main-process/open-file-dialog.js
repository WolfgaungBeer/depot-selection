const { ipcMain, dialog, app } = require('electron');

ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({ properties: ['openFile'] }, (files) => {
        if (files) event.sender.send('selected-directory', files);
    });
});

ipcMain.on('get-user-home-dir', (event) => {
    const appData = app.getPath('appData');
    event.sender.send('user-home-dir', appData);
});
