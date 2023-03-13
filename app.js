const EXPRESS = require('express');
const  CORS = require('cors')
const APP = EXPRESS();
APP.use(CORS());
const PATH = require('path')
const {productos} = require('./data/data');

//Routes
const {Cafe} = require('./Routes/Cafe');
const {Capuchino} = require('./Routes/Capuchino');
const {CafeConLeche} = require('./Routes/CafeConLeche');
const {CafeEspeciales} = require('./Routes/CafeEspeciales');
const {Te} = require('./Routes/Te');

APP.use(EXPRESS.static(__dirname + '/static'));

APP.get('/', (req, res) => {
    res.sendFile(PATH.resolve(__dirname,'/index.html'))
})

APP.get('/cafe', (req, res) => {
    res.send(Cafe(productos.cafe))
})

APP.get('/capuchino', (req, res) => {
    res.send(Capuchino(productos.capuchino))
})

APP.get('/cafeconleche', (req, res) => {
    res.send(CafeConLeche(productos.cafesConLeche))
})

APP.get('/cafeespecial', (req, res) => {
    res.send(CafeEspeciales(productos.cafesEspeciales))
})

APP.get('/te', (req, res) => {
    res.send(Te(productos.te))
})

APP.use((req, res) => {
    res.status(404).send(`<h1>No se encuentra la direccion 404 </h1>`);
})

APP.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})