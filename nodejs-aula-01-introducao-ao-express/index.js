// Importando o pacote do Express.js
const express = require("express");
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs')

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Node.js!</p>"
  );
});

//ROTA PERFIL
//app.get("/perfil", function (req, res) {
//res.send("<h1>Perfil do usuário</h>");});

//ROTA COM PARÂMETRO
// :nome -> parâmetro obrigatório
//: nome? -> parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  // res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  // res.send("<h1>Perfil do usuário</h>");
  // Coletando o parâmetro da rota e gravando na variável
  const nome = req.params.nome;
  if (nome) {
    res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil!<h2>`);
  }
});

//ROTA DE PRODUTOS
app.get("/produtos", (req,res) =>{
    res.render("produtos")
})

// Iniciando o servidor da aplicação na porta 8080
// O Método listen do Express inicia um servidor
app.listen(8081, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor Iniciado com sucesso!");
  }
});
