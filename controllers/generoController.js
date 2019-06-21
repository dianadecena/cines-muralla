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

controller.getGenero = async function (id_genero, callback){
    try {
        let genero = await Genero.findAll({
            where: {
                id_genero
            }
        });
        
        genero = genero.map(result => result.dataValues);
        callback(genero, null);
    }catch (error) {
        callback(null, error);
    }
}

module.exports = controller;