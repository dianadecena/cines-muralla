const sequelize = require('sequelize');
const database = require('../config/database');

const Subtitulo_Pelicula = database.define('Subtitulo_Pelicula', {
    id_subtitulo: {
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
            notEmpty: false,
            isNumeric: true
        }
    },
    id_subtitulop: {
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

module.exports = Subtitulo_Pelicula;