const express = require('express');
const path = require('path');
const app = express();

// Definindo a porta 80
const PORT = 80;

// Deixa a pasta "public" acessível
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://<IP da máquina>`);
});

