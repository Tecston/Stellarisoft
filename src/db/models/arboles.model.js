//definimos un modelo de datos para representar los árboles
//en una base de datos relacional utilizando Sequilize, con los campos.
const { Model, DataTypes } = require('sequelize');

const ARBOL_TABLE = 'Arboles';

class Arbol extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ARBOL_TABLE,
            modelName: 'Arbol',
            timestamps: true
        }
    }
}

const ArbolSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    especie: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'especie'
    },
    nombre_persona: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_persona'
    },
    longitud: {
        allowNull: false,
        type: DataTypes.FLOAT,
        field: 'longitud'
    },
    latitud: {
        allowNull: false,
        type: DataTypes.FLOAT,
        field: 'latitud'
    },
    fecha_registro: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_registro'
    }
};

module.exports = { Arbol, ArbolSchema };
