const express = require('express');
const app = express(); //variable de express
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => { // configurando un solicitud get cuando el path sea un slash "/" 

    res.render('home', {
        nombre: 'ViCtor'
    });

});
app.get('/about', (req, res) => { // configurando un solicitud get cuando el path sea un slash "/" 

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});