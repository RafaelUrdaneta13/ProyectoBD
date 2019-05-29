const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.pug', { title: 'Hey', message: 'TU CINE BEBE'});
})

router.get('/Sedes', (req, res)=>{
    res.render('Sedes.pug', { title: 'Hey', message: 'Sedes'});
})

router.get('*', (req, res)=>{
    res.end('Not found');
})

module.exports=router;