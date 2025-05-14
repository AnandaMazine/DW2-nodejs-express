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

export default router;