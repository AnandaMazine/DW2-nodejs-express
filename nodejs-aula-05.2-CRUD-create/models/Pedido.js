import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define('pedidos',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false, 
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})
Pedido.sync({forse:false});
export default Pedido;