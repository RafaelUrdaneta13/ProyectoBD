const express = require('express');
const router = express.Router();

const db = require('../database');

router.get('/add', (req, res)=> {
   res.render('Sedes/add.pug',{ title: 'Hey', message: 'CREAR SEDE'});

})

router.post('/add', (req, resp)=>{
   res.send('recibido');
});

module.exports = router;