import express from "express";
const router = express.Router();
// Importando o Model de Clientes
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Fazendo um SELECT na tabela de Clientes
  // findAll() -> retorna uma promesse
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes",
        {
          clientes: clientes,
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

//ROTA DE CADASTRO DE CLIENTE
router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  //Enviando dados para o banco
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    console.log(`Realizado cadastro:${nome} - ${cpf} - ${endereco}.`);
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/clientes/delete/:id", (req, res) => {
  //Coletando o parâmetro ID da rota
  const id = req.params.id;
  Cliente.destroy({
    where:{
      id : id
    }
  }).then(() => {
    console.log(`Cliente com a ID: ${id} excluído com sucesso!`);
    res.redirect("/clientes");
  }).catch (error => {
    console.log(error);
  })

});

export default router;