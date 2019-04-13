var express = require('express');
var app = express();
// const {PORT} = require('./config');
const PORT = 3000;

require("./routes/api")(app);
require("./routes/views")(app);

// Configurar cabeceras y cors

const init = () =>{
	console.log('Inicando.....');
	app.listen(3000, () => {
		console.log(`Server activo en puerto ${PORT}`);
	});
}

init();

// app.get('/', function (req, res) {
//   res.json(users);
// });

// app.get('/' , (req, res) => {
// 	res.json(users);
// });