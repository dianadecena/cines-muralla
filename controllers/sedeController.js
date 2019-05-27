const sequelize = require('sequelize');
const database = require('../config/database');
const Sede = require('../models/Sede');

const controller = {}

// todas las sedes
controller.getSedes = async function (callback){
    try {
        let sedes = await Sede.findAll({
            where: {
                id_sede: 2
            }
        });
        sedes = sedes.map(result => result.dataValues);
        console.log(sedes);
        callback(sedes, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear una sede
controller.createSede = async function (data, callback) {
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