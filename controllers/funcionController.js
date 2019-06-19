const sequelize = require('sequelize');
const database = require('../config/database');
const Funcion = require('../models/Funcion');

const controller = {}

// todas las funciones
controller.getFunciones = async function (callback){
    try {
        let funciones = await Funcion.findAll({
        });
        funciones = funciones.map(result => result.dataValues);
        callback(funciones, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createFuncion = async function (data, callback) {
    console.log(data);
    try {
        let response = await Funcion.create({
            id_cartelera: data.id_cartelera,
            id_dia: data.id_dia,
            horario_inicio: data.horario_inicio,
            horario_final: data.horario_final,
            id_sala: data.id_sala
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;