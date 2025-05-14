import Sequelize from "sequelize";
import connection from "../config/sequelize-config";

const produto = connection.define('produto',{
    numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor:{
        type: Sequelize.float,
        allowNull: false, 
    },
    categoria:{
        type: Sequelize.float,
        allowNull: false,
    },
})
pedido.sync({forse:false});
export default Produto;