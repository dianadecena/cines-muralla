const sequelize = require('sequelize');
const database = require('../config/database');
const Comida = require('../models/Comida');

const controller = {}

controller.getComida = async function (callback){
    try {
        let comidas= await Comida.findAll({
        });
       comidas= comidas.map(result => result.dataValues);
        console.log(comidas);
        callback(comidas, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createComida = async function (data, callback) {
    console.log(data);
    try {
        let response = await Comida.create({
            id_comida: data.id_comida,
            id_categoria: data.id_categoria,
            nombre_comida: data.nombre_categoria
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.deleteComida = async function (id_comida, callback) {
    try {
        let response = await Comida.destroy({
            where:{
                id_comida
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}



module.exports = controller;