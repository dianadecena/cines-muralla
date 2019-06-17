const sequelize = require('sequelize');
const database = require('../config/database');
const Idioma_Subtitulos = require('../models/Idioma_Subtitulos');

const controller = {}

// todas los idiomas
controller.getIdiomasSubtitulos = async function (callback){
    try {
        let idiomas_subtitulos = await Idioma_Subtitulos.findAll({
        });
        idiomas_subtitulos = idiomas_subtitulos.map(result => result.dataValues);
        callback(idiomas_subtitulos, null);
    }catch (error) {
        callback(null, error);
    }
}


module.exports = controller;