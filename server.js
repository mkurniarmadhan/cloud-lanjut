const WebSocket = require('ws');
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
    console.log('User terhubung');
    ws.send('Welcome to WebSocket server!');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Server: ${message}`);
    });

    ws.on('close', () => console.log('User terhubung'));
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
