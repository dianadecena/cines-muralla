const sequelize = require('sequelize');
const database = require('../config/database');

const Tipo_Repro = database.define('Tipo_Repro', {
    id_tr: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    tr: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Tipo_Repro;