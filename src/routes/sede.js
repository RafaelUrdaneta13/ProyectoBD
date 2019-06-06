const express = require('express');
const router = express.Router();

const db = require('../database');

router.get('/', (req, res)=>{
    res.render('Sedes/Sedes.pug', { title: 'Hey', message: 'Sedes'});
 })

router.get('/add', (req, res)=> {
   res.render('Sedes/add.pug',{ title: 'Hey', message: 'CREAR SEDE'});

})

router.post('/add', (req, res)=>{
   res.send('recibido');
})

module.exports = router;