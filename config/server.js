// Variável do framework Express, que agiliza alguns procedimentos
var express = require('express');
var app = express();

// Módulo utilizado para importar as outras partes do projeto
var consign = require('consign');

// Middleware para receber dados de formulários
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Configurando o EJS para atuar como View Engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurando diretório de arquivos estáticos
app.use(express.static('./app/public'));

// Importação das rotas, controllers, etc
consign()
	.include('./app/routes')
	.then('./app/controllers')
	.then('./config/db_config.js')
	.then('./app/models')
	.then('./app/class')
	.into(app);

// Retorna a variável app
module.exports = app;