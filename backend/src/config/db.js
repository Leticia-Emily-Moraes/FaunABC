const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "db",
	user: "user",
	password: "FaunaAbc.1234",
	database: "faunaABC"
});

connection.connect((err) => {
	if (err) {
		console.error("Erro ao conectar ao MySQL:", err);
		return;
	}
	console.log("Conectado ao MySQL com sucesso!");
});

module.exports = connection;
