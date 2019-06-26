const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.set('port',3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./route/index'));


app.listen(app.get('port'), () => {
    console.log('Server running in Port', app.get('port'));
});