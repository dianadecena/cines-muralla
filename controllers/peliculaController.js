const sequelize = require('sequelize');
const database = require('../config/database');
const Pelicula = require('../models/Pelicula');

const controller = {}

// todas las peliculas
controller.getPeliculas = async function (callback){
    try {
        let peliculas = await Pelicula.findAll({
            where: {
                id_pelicula: 2
            }
        });
        peliculas = peliculas.map(result => result.dataValues);
        console.log(peliculas);
        callback(peliculas, null);
    }catch (error) {
        callback(null, error);
    }
}

module.exports = controller;