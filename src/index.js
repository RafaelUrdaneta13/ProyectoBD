//dependencias
const express = require('express');
const morgan = require('morgan');
const expug= require('pug');
const path = require("path");
const flash = require("connect-flash");
const app= express();
const bodyParser = require("body-parser");
const routes = require("./routes/");



//settings
app.set('port', process.env.PORT || 4000);
app.set('appName', 'Proyecto');
app.set("views", path.join(__dirname, "views"));
app.set('engineView', expug)

//middlewares

app.use(morgan('combined'));

app.use(function(req, res, next){
 console.log('request url: ' + req.url);
 next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Si no conseguimos el archivo le mandamos 404 al cliente
//app.use(errorHandlers.notFound);


//rutas
app.use("/", routes);

//public
app.use(express.static(path.join(__dirname, "public")));

//para mensajes de error
app.use(flash());

//servidor puerto
app.listen(app.get('port'), ()=>{
    console.log('servidor escuchando', app.get('port') );
    console.log('Nombre de la App:', app.get('appName'));
    
});

//exportacion

module.exports = app;