const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('entradas')  
});

module.exports = router;