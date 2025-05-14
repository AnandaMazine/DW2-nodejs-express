import Sequelize from "sequelize";
import connection from "../config/sequelize-config";

const pedido = connection.define('pedidos',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco:{
        type: Sequelize.double,
        allowNull: false, 
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})
pedido.sync({forse:false});
export default Pedido;