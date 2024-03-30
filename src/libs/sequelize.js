const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(
    config.dbName, // Nombre de la base de datos
    config.dbUser, // Usuario de la base de datos
    config.dbPassword, // Contraseña de la base de datos
    {
        host: config.dbHost,
        dialect: 'postgresql' // Especifica el dialecto de la base de datos (en este caso, PostgreSQL)
    }
);

// Sincronizar los modelos con la base de datos y manejar errores
sequelize.sync()
    .then(() => {
        console.log('¡Sincronización de modelos exitosa!');
    })
    .catch(error => {
        console.error('Error en la sincronización de modelos:', error);
    });

// Configurar los modelos utilizando la función setupModels
setupModels(sequelize);

module.exports = sequelize;
