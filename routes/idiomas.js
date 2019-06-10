const express = require('express');
const router = express.Router();
const idiomaController = require('../controllers/idiomaController');

router.get('/', (req, res) => {
    idiomaController.getIdiomas((idiomas, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('idiomas', {idiomas})     
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        idiomaController.createIdioma( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/idiomas');
            }
        })
    }
});

router.post('/delete/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        idiomaController.deleteIdioma(req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al eliminar la película`
                })
            console.log(err);
            }else{
                res.redirect('/idiomas');
            }
        })
    }
});

module.exports = router;