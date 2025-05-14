import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando um Model (tabela do banco)
const Cliente = connection.define('clientes', {
    // Colunas da tabela
    nome: {
        // Tipo do dado
        type: Sequelize.STRING,
        // Permite vazio?
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull:false,
    },
})
// Criando a tabela somente se ainda não existir
Cliente.sync({forse: false})
export default Cliente;