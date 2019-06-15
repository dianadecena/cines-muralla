const sequelize = require('sequelize');
const database = require('../config/database');
const Subtitulo_Pelicula = require('../models/Subtitulo_Pelicula');

const controller = {}

controller.getSubtituloPelicula = async function (callback){
    try {
        let subtituloPelicula = await database.query(
            "SELECT U.`censura` FROM `cartelera` AS C"+
            " INNER JOIN `censura_pelicula` AS E ON C.`id_pelicula` = E.`id_pelicula`"+
            " INNER JOIN `censura` AS U ON E.`id_censura` = U.`id_censura`",
            { type: sequelize.QueryTypes.SELECT}
        );
        
        console.log(censuraPelicula);
        callback(censuraPelicula, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createCensuraPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Censura_Pelicula.create({
            id_censura = data.id_censura,
            id_pelicula = data.id_pelicula
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;