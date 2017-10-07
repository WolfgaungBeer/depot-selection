import path from 'path';
import url from 'url';
import { app, BrowserWindow } from 'electron';

const filePath = path.join(__dirname, './bin/index.html');
const fileUrl = url.format({ pathname: filePath, protocol: 'file:', slashes: true });
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 1200, height: 600 });
    mainWindow.loadURL(fileUrl);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
