const sequelize = require('sequelize');
const database = require('../config/database');

const Tipo_Sala = database.define('Tipo_Sala', {
    id_tipo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    tipo_sala: {
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

module.exports = Tipo_Sala;