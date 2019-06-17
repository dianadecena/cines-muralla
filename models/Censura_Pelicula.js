const sequelize = require('sequelize');
const database = require('../config/database');

const Censura_Pelicula = database.define('Censura_Pelicula', {
    id_censura: {
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
    id_censurap: {
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

module.exports = Censura_Pelicula;