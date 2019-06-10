const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
    salaController.getSalasPorSede((id_sede, salasPorSede, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('salas', {salasPorSede})     
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

module.exports = router;