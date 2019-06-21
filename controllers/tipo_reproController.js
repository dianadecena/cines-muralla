const sequelize = require('sequelize');
const database = require('../config/database');
const Tipo_Repro = require('../models/Tipo_Repro');

const controller = {}

// todas las peliculas
controller.getTiposRepro = async function (callback){
    try {
        let tipos_repro = await Tipo_Repro.findAll({
        });
        tipos_repro = tipos_repro.map(result => result.dataValues);
        callback(tipos_repro, null);
    }catch (error) {
        callback(null, error);
    }
}