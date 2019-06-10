const sequelize = require('sequelize');
const database = require('../config/database');
const Sala = require('../models/Sala');

const controller = {}

// todas las salas
controller.getSalas = async function (id_sede, callback){
    try {
        let salas = await Sala.findAll({
        });
        salas = salas.map(result => result.dataValues);
        console.log(salas);
        callback(salas, null);
    }catch (error) {
        callback(null, error);
    }
}

// todas las salas de una sede 
controller.getSalasPorSede = async function (callback){
    try {
        let salasPorSede = await Sala.findAll({
        });
        salasPorSede = salasPorSede.map(result => result.dataValues);
        console.log(salasPorSede);
        callback(salasPorSede, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear sala en una sede
controller.createSala = async function (data, callback) {
    console.log(data);
    try {
        let response = await Sala.create({
            id_sede: id_sede,
            id_tipo: data.id_tipo,
            id_tr: data.id_tr,
            cant_asientos: data.cant_asientos
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;