const { Router } = require('express');
const router = new Router();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const db = require('./config/conexion');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


/* para hacer una peticion podemos utilizar y vamos a 
    usar el modulo de node fetch
*/

/* a continuacion get para generar un hash segun lo solicitado */


router.get('/admision', async(req,res)=>{

const response = await fetch('http://jsonplaceholder.typicode.com/albums');
const albums = await response.json();
albums.forEach(function(album){
    let secret = album.title;
    album.hash = crypto.createHash('sha1',secret).update(JSON.stringify(album.title)).digest('hex')

})
// aca se muestra 
res.json(albums)

});


/* en la anterior usamos la fetch aca varimo a un post con una funcion manejadora ya que no vamos a capturar si no enviar
    creo una variable para pasarle el req.body y poder usarla en el query sin necesidad de volver a escribirla 
    y manejo el error con el if esto tambien y es recomendable realizarlo con un store procedure parapoder utilizar la DB para loque fue creada
 */

router.post('/admision', function(req, res) {        
    
        var persona = {"nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "correo": req.body.correo}
    
       
        console.log('Enviando datos');
        const consult = db.connection.query('INSERT INTO prueba_admision.persona SET ?',persona, function(error,result) {
            if (error) {
                console.log(error.message);
            } else {
                res.json(result);
                console.log('success');    
            }
        }); 
    });

 


 /* ACA EL POST DE ARRIBA PERO CON PROCEDIMIENTO DE ALMACENADO USAMOS DIRECTAMENTE LA DB PARA REALIZAR EL RECORD */
    router.post('/admision/procedure', (req,res)=>{

        const {nombre, apellido, correo} = req.body;
        //console.log(nombre,apellido,correo)
        
        var query= db.connection.query("CALL addUser(?,?,?)",[nombre,apellido,correo],(err,result)=>{
            if(!err) {
                console.log("Saved Persona!!");
                res.json(result);
              } else {
                console.log(err);
              }
        });
    
    });   
    
module.exports = router;  







