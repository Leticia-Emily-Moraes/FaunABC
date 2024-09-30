const mysql = require("mysql2");

let connection;

function connectToDatabase() {
	connection = mysql.createConnection({
		host: "db",
		user: "user",
		password: "FaunaAbc.1234",
		database: "faunaABC",
	});

	connection.connect((err) => {
		if (err) {
			console.error("Erro ao conectar ao MySQL:", err);
			console.log("Tentando reconectar em 5 segundos...");
			setTimeout(connectToDatabase, 5000);
		} else {
			console.log("Conectado ao MySQL com sucesso!");
		}
	});

	connection.on("error", (err) => {
		console.error("Erro de conexão com MySQL", err);
		if (err.code == "PROTOCOL_CONNECTION_LOST") {
			console.log("Conexão perdida, tentando reconectar...");
			connectToDatabase();
		}
	});
}

connectToDatabase();

module.exports = connection;
