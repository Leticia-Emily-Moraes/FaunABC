const express = require("express");
const session = require("express-session");
const app = express();
const db = require("./config/db");
const userRoutes = require("./routes/useRoutes");

const PORT = process.env.PORT || 3001;

app.use(
	session({
		secret: "seuSegredoSeguro",
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 30,
		},
	}),
);

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta http://192.168.0.125:${PORT}`);
});
