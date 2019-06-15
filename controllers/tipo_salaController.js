const sequelize = require('sequelize');
const database = require('../config/database');
const Tipo_Sala = require('../models/Tipo_Sala');

const controller = {}

// todas las peliculas
controller.getTipos = async function (callback){
    try {
        let tipos_sala = await Tipo_Sala.findAll({
        });
        tipos_sala = tipos_sala.map(result => result.dataValues);
        callback(tipos_sala, null);
    }catch (error) {
        callback(null, error);
    }
}