const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sedeController');

router.get('/', (req, res) => {
    sedeController.getSedes((sedes, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('sedes', {sedes})     
        }    
    });
});

module.exports = router;