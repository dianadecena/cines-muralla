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

// crear una película
controller.createPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Pelicula.create({
            titulo: data.titulo,
            fecha_estreno: data.fecha_estreno,
            descripcion: data.descripcion,
            duracion: data.duracion,
            censura: data.censura
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;