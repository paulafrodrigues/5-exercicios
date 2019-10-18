//criar API com express e servidor 3000

const express = require('express');
const server = express();
const usuariosLista = ['Paula', 'Thiele', 'Nataly'];
const listaLivros = ['Harry Potter', 'Senhor dos Anéis', 'Crônicas Saxônicas'];

//criar um GET com res de Hello World

server.get('/', (req, res, next) => {
    res.send('Hello World!');
});

//criar um GET que te dê a lista de usuários

server.get('/usuarios', (req, res, next) =>{
    res.json(usuariosLista);
});

// Criar GET que te dê um usuário

server.get('/usuarios/:usuariosListaIndex', (req, res, next) =>{
    const idUsuarios = req.params.usuariosListaIndex;
    const usuario = usuariosLista[idUsuarios];
    res.send(usuario);

});

//criar endpoint get que traga lista de livros ao acessar /livros

server.get('/livros', (req, res, next) =>{
    res.json(listaLivros);
});

// criar umma rota GET que utilize params para trazer um único livro

server.get('/livros/:listaLivrosIndex', (req, res, next) =>{
    const idLivros = req.params.listaLivrosIndex;
    const livros = listaLivros[idLivros];
    res.send(livros);
})

// criar uma rota GET QUE UTILIZE 2 PARAMS E QUE RETORNE O USUÁRIO E O LIVRO

server.get('/usuarios/:usuariosListaIndex/livros/:listaLivrosIndex', (req, res, next) =>{
    const { usuariosListaIndex, listaLivrosIndex } = req.params;
    const usuarioFinal = usuariosLista[usuariosListaIndex];
    const livroFinal = listaLivros[listaLivrosIndex];
    const final = usuarioFinal + ' - ' + livroFinal;
    return res.json(final);

});

// CRIAR UMA ROTA GET QUE UTILIZE QUERY STRINGS QUE AO ACESSAR /COUNTRY TRAGA 1 PAÍS

server.get('/country', (req, res, next) =>{
    res.send(req.query.pais);
});

server.listen(3000);