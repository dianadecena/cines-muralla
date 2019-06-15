const sequelize = require('sequelize');
const database = require('../config/database');

const Sala = database.define('Sala', {
    id_sala: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_sede: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    cant_asientos: {
        type:  sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    disponible: {
        type:  sequelize.BOOLEAN,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    id_tr: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    id_tipo: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Sala;