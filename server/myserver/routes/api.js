const users = [
	{
		'name': 'Wilmer',
		'user': 'wil.street',
		'pass': '123456'
	},
	{
		'name': 'Brayan',
		'user': 'b.camargo',
		'pass': 'cambio'
	}
];

const API_BASE = "/api";
const db = require("../db/index");

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });

    app.get(`${API_BASE}/users` , (req , res) => {
        const query = db.getUsers()
        res.json(query);
    });
    
    app.get(`${API_BASE}/users/:id` , (req , res) => {
        const query = db.getUsersByID(req.params.id)
        res.json(query);
    });

}