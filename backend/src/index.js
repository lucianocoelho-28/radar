const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.227tc.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedtopology: true,
});

app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parametros:

// Query Params: request.query (filtros, ordenacao, paginacao, ...)
// Route Params: request.params (identificar um recurso na alteracao ou remocao)
// Body: request.body (dados para criacao ou alteracao de um registro)

// MongoDB (Banco de Dados Nao-Relacional)

app.listen(3333); 

