var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);




app.get('/cadastro',function (requisicao, resposta){
let nome = requisicao.query.nome
let email = requisicao.query.email
let nascimento= requisicao.query.nascimento




resposta.render('resposta.ejs', {mensagem: "Usuário cadastrado com sucesso!", usuario: nome, email: email})

})

app.post('/cadastro',function (requisicao, resposta){
    let nome = requisicao.body.nome
    let email = requisicao.body.email
    let nascimento= requisicao.body.nascimento
  

    resposta.render('resposta.ejs')
    
    })


    app.get('/for_ejs', function(requisicao, resposta){
        let num = requisicao.query.num;
        resposta.render('exemplo_for', {tamanho: num})
    })