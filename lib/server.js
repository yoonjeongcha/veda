#!/usr/bin/env node
"use strict";
{
    const PORT = process.argv[2] || 3000;
    const DIR = process.argv[3];
    const http = require('http');
    const express = require('express');
    const app = express();
    app.use(express.static('./client'));
    app.use('/link', express.static(DIR));
    const server = http.createServer(app);
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
        socket.on('ready', () => {
            socket.broadcast.emit('ready');
        });
        socket.on('create', (config) => {
            socket.broadcast.emit('create', config);
        });
        socket.on('destroy', () => {
            socket.broadcast.emit('destroy');
        });
        socket.on('onChange', (rcDiff) => {
            socket.broadcast.emit('onChange', rcDiff);
        });
        socket.on('play', () => {
            socket.broadcast.emit('play');
        });
        socket.on('stop', () => {
            socket.broadcast.emit('stop');
        });
        socket.on('loadShader', (passes) => {
            socket.broadcast.emit('loadShader', passes);
        });
        socket.on('loadSoundShader', (shader) => {
            socket.broadcast.emit('loadSoundShader', shader);
        });
        socket.on('playSound', () => {
            socket.broadcast.emit('playSound');
        });
        socket.on('stopSound', () => {
            socket.broadcast.emit('stopSound');
        });
        socket.on('setOsc', (msg) => {
            socket.broadcast.emit('setOsc', msg);
        });
    });
    server.listen(PORT, () => {
        console.log(`[VEDA] Server launched on http://localhost:${PORT}/`);
    });
}
//# sourceMappingURL=server.js.map