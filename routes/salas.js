const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');
const sedeController = require('../controllers/sedeController');
const tipo_reproController = require('../controllers/sedeController');

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
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/salas');
            }
        })
    }
});


router.get('/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        salaController.getSala(req.params.id, (sala, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                sedeController.getSedes((sedes, err) => {
                    if(err){
                        res.json({
                            success: false,
                            msg: 'Fallo buscar sedes'
                        })
                    }else{
                        res.render('salas', {sala, sedes})
                    }
                })
            }
        });
    }
});

router.post('/update/:id', (req, res) => {
    if(req.params.id){
        salaController.updateSala(req.body, req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al modificar la película ${req.params.id}`
                })
            }else{
                res.redirect('/salas');
            }
        })
    }
});

router.get('/ver/sede/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        sedeController.getSede(req.params.id, (sede, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                res.render('salas', {sede}) 
            }
        });
    }
});

router.get('/salas/:id');

module.exports = router;