const sequelize = require('sequelize');
const database = require('../config/database');
const Cartelera = require('../models/Pelicula');

const controller = {}

// todas las peliculas
controller.getCarteleras = async function (callback){
    try {
        let carteleras = await database.query(
            "SELECT C.`ubicacion`, P.`titulo`, I.`idioma`, U.(SELECT I.`idioma` FROM `subtitulo` AS U INNER JOIN `idioma` AS I ON I.`id_idioma` = U.`id_idioma`) FROM `cartelera` AS C" +
            " INNER JOIN `sede` AS S ON S.`id_sede` = C.`id_sede`" +
            " INNER JOIN `pelicula` AS P ON P.`id_pelicula` = C.`id_pelicula`" +
            " INNER JOIN `idioma` AS I ON I.`id_idioma` = C.`id_idioma`"+
            " INNER JOIN `subtitulo` AS U ON U.`id_subtitulos` = C.`id_subtitulos`",
            {type: sequelize.QueryTypes.SELECT}
        );
        carteleras = carteleras.map(result => result.dataValues);
        console.log(carteleras);
        callback(carteleras, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear una película
controller.createCartelera = async function (data, callback) {
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

//borrar una película
controller.deletePelicula = async function (id_pelicula, callback) {
    try {
        let response = await Pelicula.destroy({
            where:{
                id_pelicula
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getPelicula = async function (id_pelicula, callback){
    try {
        let pelicula = await Pelicula.findAll({
            where: {
                id_pelicula
            }
        });
        
        pelicula = pelicula.map(result => result.dataValues);
        console.log(pelicula);
        callback(pelicula, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.updatePelicula = async function (data, id_pelicula, callback) {
    try {
        let response = await Pelicula.update({
            titulo: data.titulo,
            fecha_estreno: data.fecha_estreno,
            descripcion: data.descripcion,
            duracion: data.duracion,
            censura: data.censura
        },{
            where:{
                id_pelicula
            } 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;