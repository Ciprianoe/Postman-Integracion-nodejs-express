const mysql = require('mysql');
const prop_reader = require('properties-reader');
var props = prop_reader(__dirname + '/database.properties');

var connection = mysql.createConnection({    
    host: props.get('host'),
    user: props.get('username'),
    password: props.get('password'),
    database: props.get('db'),
    port: props.get('port')

});

connection.connect(function (error) {
    console.log('iniciando conexion');
    if (error) {
        console.log('Error estableciendo conexion: ' + error);
        throw error;
    } else {
        console.log('conexion establecida con exito!');
    }
});

module.exports.connection = connection;