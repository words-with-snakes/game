const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const sockets = require('./src/sockets');

const app = express();
const wss = new WebSocket.Server({ port: 8080 });
const port = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

wss.on('connection', (ws) => {
  ws.on('message', sockets.clientOnMessage(ws));
  ws.send('OnConnect, from server');
});
