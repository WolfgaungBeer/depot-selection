const ipc = require('electron').ipcRenderer;

const selectDirBtn = document.getElementById('select-directory');

selectDirBtn.addEventListener('click', () => {
    ipc.send('open-file-dialog');
});

ipc.on('selected-directory', (event, path) => {
    document.getElementById('selected-file').innerHTML = `You selected: ${path}`;
});
