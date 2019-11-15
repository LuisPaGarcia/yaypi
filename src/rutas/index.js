var { get1, get2, get3 } = require('../metodos');

function rutas(app) {
	// Rutas
	app.get('/', get1);

	// GET method route
	app.get('/get', get2);

	// GET json
	app.get('/json', get3);

	return app;
}

module.exports = rutas;
