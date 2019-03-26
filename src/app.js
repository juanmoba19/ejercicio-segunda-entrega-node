const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require('./helpers');
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Juan'
    });
});

app.get('/calculos', (req, res) => {
    res.render('calculos', {
        estudiante: 'Maria',
        nota1: 3,
        nota2: 4,
        nota3: 5
    });
});

console.log(__dirname);

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
});