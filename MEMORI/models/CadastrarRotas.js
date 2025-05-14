import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const CadastrarRotas = connection.define('CadastrarRotas',{
    titulo_rota:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade_localizada:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    longitute_rota:{
        type: Sequelize.FLOAT,
        allowNull: false, 
    },
    latitude_rota:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
})
CadastrarRotas.sync({forse:false});
export default CadastrarRotas;