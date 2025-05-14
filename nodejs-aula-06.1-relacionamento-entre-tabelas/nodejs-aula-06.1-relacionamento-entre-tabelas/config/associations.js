import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

// Definindo as relações entre os Models
const defineAssociations = () => {
    // Um Cliente possui muitos Pedidos
    Cliente.hasMany(Pedido, {foreignKey: "cliente_id"});

    // Um Pedido pertence a um Cliente
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
};
export default defineAssociations;