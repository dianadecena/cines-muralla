const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');
const sedeController = require('../controllers/sedeController');


router.get('/', (req, res) => {
    salaController.getSalas((salas, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'Fallo'
            });
        }else{
            sedeController.getSedes((sedes, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo buscar modelos'
                    })
                }else{
                    res.render('salas', {salas, sedes})
                }
            })
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        salaController.createSala(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la sala`
                })
            console.log(err);
            }else{
                res.redirect('/salas');
            }
        })
    }
});

module.exports = router;