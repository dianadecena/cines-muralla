const sequelize = require('sequelize');
const database = require('../config/database');
const Ticket = require('../models/Ticket');

const controller = {}

controller.createTicket = async function (data, callback) {
    console.log(data);
    try {
        let response = await Ticket.create({
            id_funcion: data.id_funcion,
            cant_asientos: data.cant_asientos
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;