const sequelize = require('sequelize');
const database = require('../config/database');
const Idioma_Pelicula = require('../models/Idioma_Pelicula');

const controller = {}

controller.getIdiomaPelicula = async function (callback){
    try {
        let idiomaPelicula = await database.query(
            "SELECT I.`idioma` FROM `cartelera` AS C"+
            " INNER JOIN `idioma_pelicula` AS P ON C.`id_pelicula` = P.`id_pelicula`"+
            " INNER JOIN `idioma` AS I ON P.`id_idioma` = I.`id_idioma`",
            { type: sequelize.QueryTypes.SELECT}
        );
        
        console.log(idiomaPelicula);
        callback(idiomaPelicula, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createIdiomaPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Idioma_Pelicula.create({
            id_pelicula: data.id_pelicula,
            id_idioma: data.id_idioma
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;