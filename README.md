# Prueba de admisión: Destrezas de Integración

Esta prueba está diseñada para medir tus destrezas en el área de integración. Para resolver esta prueba debes tener en cuenta que debes usar las siguientes tecnologías:

+ GIT
+ NPM
+ JavaScript
+ Restful Web Services
+ Postman
+ Bases de datos

Tu tarea es realizar un servicio web REST utilizando el framework [`Express.js`](https://expressjs.com/). Antes de comenzar, debes hacer los siguientes pasos:

+ Genera una llave SSH pública.

+ Agrégala a tu cuenta de GitHub.

+ Usa la consola de GIT para clonar vía SSH el repositorio con el comando `git clone`.

+ Crea tu `branch` siguiendo este formato `admision/nombre-apellido`. Para hacerlo, debes ejecutar el siguiente comando en la consola GIT `git checkout -b admision/nombre-apellido`.

El servicio a crear debe llamarse `admision` y éste debe atender las peticiones HTTP que se mencionan a continuación.

### GET `admision`

Debe obtener los datos de albunes que yacen en formato JSON [aquí](http://jsonplaceholder.typicode.com/albums). Adicionalmente, debe agregar un atributo llamado `hash` que sea el resultado de aplicarle el algoritmo de `SHA1` al campo `title`.

Un ejemplo de la estructura inicial es la siguiente: 

```json
[
	{
	    "userId": 1,
	    "id": 1,
	    "title": "quidem molestiae enim"
	},
	{
	    "userId": 1,
	    "id": 2,
	    "title": "sunt qui excepturi placeat culpa"
	}
]
```

Consecuentemente, la estructura final debe ser como se muestra a continuación: 

```json
[
	{
		"userId": 1,
		"id": 1,
		"title": "quidem molestiae enim",
		"hash": "ba232411feb13a64634e52d1e39183c9185af197"
	},
	{
		"userId": 1,
	    "id": 2,
	    "title": "sunt qui excepturi placeat culpa",
		"hash": "d2a09f04fc7557af48b5cab5b930592dd1e9c06c"
	}
]
```

###POST `admision`

Debe almacenar en base de datos tus datos personales. Para ello, debes enviar en el `body` de la petición el siguiente JSON con tus datos:

```json
{
    "nombre": "",
    "apellido": "",
    "correo": ""
}
```

El servicio debe conectarse a la base de datos `MySQL` llamada `prueba_admision` con las siguientes credenciales:

+ Host: db4free.net
+ Port: 3306
+ Username: sql9144354
+ Password: 7TW2ccREF1

Estas credenciales junto con el nombre de la base de datos deben encontrarse en un archivo llamado `database.properties` el cual debe ser leído al momento de invocar el servicio para crear la conexión a la base de datos. Adicionalmente,  tus datos deben ser almacenados en la tabla `persona`.

###¡Finalmente!

Almacena tu código en el `branch` que creaste con tu nombre y apellido. No debes agregar la carpeta `node_modules` al repositorio, ya que el package.json debe especificar todas las dependencias. Igualmente, debes almacenar screenshots de Postman consumiendo los servicios creados en una carpeta de nombre `evidencias`. Verfica tus cambios, `commit` y luego `push`.
