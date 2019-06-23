const sequelize = require('sequelize');
const database = require('../config/database');
const Dias_Funcion = require('../models/Dias_Funcion');

const controller = {}

controller.createDiasFuncion = async function (data, callback) {
    console.log(data);
    try {
        let response = await Dias_Funcion.create({
            id_dia: data.id_dia,
            id_funcion: data.id_funcion
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;