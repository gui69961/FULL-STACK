const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();






app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


const port = 80;


app.get('/', (req, res) => {
  res.redirect('/cadastra');
});


app.get('/cadastra', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});


app.post('/cadastra', (req, res) => {
  const { usuario, senha } = req.body;
  console.log(`Usuário cadastrado: ${usuario}`);
  res.redirect('/login');
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});


app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario && senha) {
    res.render('sucesso', { usuario });
  } else {
    res.send('Login inválido.');
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost`);
});
