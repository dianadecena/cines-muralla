const sequelize = require('sequelize');
const database = require('../config/database');

const Idioma_Pelicula = database.define('Idioma_Pelicula', {
    id_pelicula: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_idioma: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_idiomap: {
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

module.exports = Idioma_Pelicula;