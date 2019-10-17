const express = require('express');
const server = express();
const usuariosLista = ['Paula', 'Thiele', 'Nataly'];

server.get('/', (req, res, next) => {
    res.send('Hello World!');
});

server.get('/usuarios', (req, res, next) =>{
    res.send(usuariosLista);
});

server.get('/usuarios/:username', (req, res, next) =>{
    res.send(req.params);
})

server.listen(3000);