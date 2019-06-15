const express = require('express');
const router = express.Router();
const carteleraController = require('../controllers/carteleraController');
const censura_peliculaController = require('../controllers/censura_peliculaController');

router.get('/', (req, res) => {
    carteleraController.getCarteleras((carteleras, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('carteleras', {carteleras})     
        }    
    });
});

module.exports = router;