//criar API com express e servidor 3000

const express = require('express');
const server = express();
const usuariosLista = ['Paula', 'Thiele', 'Nataly'];

//criar um GET com res de Hello World

server.get('/', (req, res, next) => {
    res.send('Hello World!');
});

//criar um GET que te dê a lista de usuários

server.get('/usuarios', (req, res, next) =>{
    res.json(usuariosLista);
});

// Criar GET que te dê um usuário

server.get('/usuarios/:username', (req, res, next) =>{
    res.send(req.params);
})

server.listen(3000);