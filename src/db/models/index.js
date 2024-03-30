//configurar los modelos de datos y 
//vincularlos a la instancia de Sequelize.
const { Arbol, ArbolSchema } = require('./arboles.model');

function setupModels(sequelize) {
    Arbol.init(ArbolSchema, Arbol.config(sequelize));
}

module.exports = setupModels;

