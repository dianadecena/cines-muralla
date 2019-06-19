const sequelize = require('sequelize');
const database = require('../config/database');
const Genero = require('../models/Genero');

const controller = {}

controller.getGeneros = async function (callback){
    try {
        let generos = await Genero.findAll({
        });
        generos = generos.map(result => result.dataValues);
        callback(generos, null);
    }catch (error) {
        callback(null, error);
    }
}

module.exports = controller;