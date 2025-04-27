<<<<<<< HEAD
const express = require('express');
const path = require('path');
const app = express();


const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://<IP da máquina>`);
});
=======
require("colors");

var http = require("http");

var express = require("express");

var app = express();

app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(80);

console.log("servidor rodando...");

console.log("Servidor rodando".rainbow);
>>>>>>> 1c4ae3ca15d88a6fd63a786e14728000f199f905

