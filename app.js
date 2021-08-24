
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();



crearArchivo( argv.b , argv.l, argv.m )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(colors.error(err)));