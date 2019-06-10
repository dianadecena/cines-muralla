const sequelize = require('sequelize');
const database = require('../config/database');

const Idioma = database.define('Idioma', {
    id_idioma: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    idioma: {
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

module.exports = Idioma;