const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');
const taquillaController = require('../controllers/taquillaController');
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
    funcionController.getFunciones((funciones, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            salaController.getSalas((salas, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo buscar modelos'
                    })
                }else{
                    res.render('taquillaS', {funciones, salas})
                }
            })
            
        }    
    });
});


router.get('/funcion/:id', (req, res) => {
    funcionController.getFunciones((funciones, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            if(req.params.id){
            salaController.getSala(req.params.id, (sala, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo al buscar la sala'
                    })
                }else{
                    res.render('taquilla', {funciones, sala}) 
                }
            });
        }
        }    
    });
});
    



router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        taquillaController.createTicket( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/taquilla');
            }
        })
    }
});

module.exports = router;