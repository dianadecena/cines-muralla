const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');
const sedeController = require('../controllers/sedeController');

/*router.get('/', (req, res) => {
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
                        msg: 'Fallo buscar modelos'
                    })
                }else{
                    res.render('funciones', {funciones, sedes})
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
});*/

module.exports = router;