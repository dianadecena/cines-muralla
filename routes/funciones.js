const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');
const sedeController = require('../controllers/sedeController');
const carteleraController = require('../controllers/carteleraController');
const diasController = require('../controllers/diasController');
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
    funcionController.getFunciones((funciones, err) => {
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
                        msg: 'Fallo buscar sedes'
                    })
                }else{
                    diasController.getDias((dias, err) => {
                        if(err){
                            res.json({
                                success: false,
                                msg: 'Fallo buscar sedes'
                            })
                        }else{
                            res.render('funciones', {funciones, sedes, dias})
                        }
                    })
                }
            })
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        funcionController.createFuncion(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/funciones');
            }
        })
    }
});

router.get('/buscar', (req, res) => {
    console.log(req.body);
    if(req.body){
        salaController.getSalasPorSede(req.body, (SalasPorSede, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo buscar sedes'
                })
            }else{
                res.render('funciones', {SalasPorSede})
            }
        })
    }
});


module.exports = router;