const sequelize = require('sequelize');
const database = require('../config/database');
const Cartelera = require('../models/Pelicula');

const controller = {}

// todas las peliculas
controller.getPeliculasPorSede = async function (callback){
    try {
        let PeliculasPorSede = await database.query(
            "SELECT P.`titulo`, C.`id_cartelera` FROM `cartelera` AS C" +
            " INNER JOIN `pelicula` AS P ON C.`id_pelicula` = P.`id_pelicula`",
            {type: sequelize.QueryTypes.SELECT}
        );
        console.log(carteleras);
        callback(carteleras, null);
    }catch (error) {
        callback(null, error);
    }
}

module.exports = controller;