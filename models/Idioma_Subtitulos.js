const sequelize = require('sequelize');
const database = require('../config/database');

const Idioma_Subtitulos = database.define('Idioma_Subtitulos', {
    id_subtitulo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    idioma_sub: {
        type:  sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Idioma_Subtitulos;