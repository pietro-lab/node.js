const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');

module.exports = () => {
    const app = express();

//SETANDO VARIAVEIS DA APLICAÇÃO
app.set('port', process.env.PORT || config.get('server.port'));

require('../api/routes/customerWallets')(app);


//MIDDLEWARES
app.use(bodyParser.json());



return app;
}