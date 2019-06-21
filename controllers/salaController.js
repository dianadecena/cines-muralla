const sequelize = require('sequelize');
const database = require('../config/database');
const Sala = require('../models/Sala');

const controller = {}

// todas las salas
controller.getSalas = async function (callback){
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

controller.getSalasPorSede = async function (data, callback){
    try {
        let SalasPorSede = await Sala.findAll({
            where: {
                id_sede: data.id_sede
            }
        });
        SalasPorSede = SalasPorSede.map(result => result.dataValues);
        callback(SalasPorSede, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear sala en una sede
controller.createSala = async function (data, callback) {
    console.log(data);
    try {
        let response = await Sala.create({
            id_sede: data.id_sede,
            cant_asientos: data.cant_asientos,
            id_tipo: data.id_tipo,
            id_tr: data.id_tr,
            disponible: data.disponible,
            mapa_sala:data.mapa_sala
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;