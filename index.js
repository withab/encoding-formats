const { app, BrowserWindow } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 600
    })
    win.removeMenu();
    win.loadFile('index.html');
    win.setTitle('Différents formats de texte');
    win.setIcon('icon.png');
}
app.whenReady().then(() => createWindow())