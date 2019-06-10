const sequelize = require('sequelize');
const database = require('../config/database');
const Idioma = require('../models/Idioma');

const controller = {}

// todas los idiomas
controller.getIdiomas = async function (callback){
    try {
        let idiomas = await Idioma.findAll({
        });
        idiomas = idiomas.map(result => result.dataValues);
        callback(idiomas, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear un idioma 
controller.createIdioma = async function (data, callback) {
    console.log(data);
    try {
        let response = await Idioma.create({
            idioma: data.idioma 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

//borrar un idioma 
controller.deleteIdioma = async function (id_pelicula, callback) {
    try {
        let response = await Idioma.destroy({
            where:{
                id_idioma
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getIdioma = async function (id_pelicula, callback){
    try {
        let idioma = await Idioma.findAll({
            where: {
                id_idioma
            }
        });
        
        idioma = idioma.map(result => result.dataValues);
        callback(idioma, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.updatePelicula = async function (data, id_idioma, callback) {
    try {
        let response = await Idioma.update({
            idioma: data.idioma
        },{
            where:{
                id_idioma
            } 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;