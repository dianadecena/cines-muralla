const sequelize = require('sequelize');
const database = require('../config/database');
const Fact_Sales = require('../models/Fact_Sales');

const controller = {}

controller.getProductosMasVendidosPorDiaSemana = async function (callback){
    try{
        let productosVendidos = await database.query(
            "SELECT COUNT(F.`id_fact`) AS cantidad, O.`nombre_comida` AS nombre, D.`dia` AS dia FROM `fact_sales` AS F" +
            " INNER JOIN `compras_comida` AS C ON F.`id_fact` = C.`id_fact`" +
            " INNER JOIN `comida` AS O ON C.`id_comida` = O.`id_comida`" +
            " INNER JOIN `dias_semana` AS D ON C.`id_dia` = D.`id_dia`" +
            " GROUP BY D.`id_dia` ORDER BY COUNT(F.`id_fact`) DESC",
            {type: sequelize.QueryTypes.SELECT}
        );

        console.log(productosVendidos)
        productosVendidos = productosVendidos.map(result => result.dataValues);
        callback(productosVendidos, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createFactura = async function (data, callback) {
    console.log(data);
    try {
        let response = await Fact_Sales.create({
            id_cartelera: data.id_cartelera,
            id_idioma: data.id_idioma
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}

module.exports = controller;