var express = require('express');
var rutas = require('./rutas');
var app = express();

app = rutas(app);

function start() {
	app.listen(3000, async () => {
		console.log('Api escuchando en el puerto 3000!');
	});
}
module.exports = start;
