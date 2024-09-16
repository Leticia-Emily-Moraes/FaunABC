const express = require("express");
const app = express();
const db = require("./config/db");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.json());

// app.use("./api", routes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
