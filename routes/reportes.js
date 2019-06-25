const express = require('express');
const router = express.Router();
const fact_salesController = require('../controllers/fact_salesController');

router.get('/', (req, res) => {
    res.render('reportes')   
});

router.get('/ver/productos', (req, res) => {
    fact_salesController.getProductosMasVendidosPorDiaSemana((productosVendidos, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        console.log(err)
        }else{
            res.render('reportes', {productosVendidos})   
        }    
    });
});


module.exports = router;