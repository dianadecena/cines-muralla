const sequelize = require('sequelize');
const database = require('../config/database');

const Subtitulo_Pelicula = database.define('Subtitulo_Pelicula', {
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_subtitulo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Subtitulo_Pelicula;