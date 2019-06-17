const sequelize = require('sequelize');
const database = require('../config/database');

const Cartelera = database.define('Cartelera', {
    id_sede: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_pelicula: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Cartelera;