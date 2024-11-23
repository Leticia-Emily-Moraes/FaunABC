const express = require("express");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const db = require("./config/db");
const userRoutes = require("./routes/useRoutes");

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

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

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
    console.log("Usuário conectado:", socket.id);

    socket.on("novaMensagem", (mensagem) => {
        if (mensagem && mensagem.IdChat && mensagem.Mensagem) {
            console.log("Nova mensagem recebida:", mensagem);
            io.emit("atualizarChat", mensagem);
        } else {
            console.error("Mensagem inválida recebida:", mensagem);
        }
    });

    socket.on("disconnect", () => {
        console.log("Usuário desconectado:", socket.id);
    });
});


server.listen(PORT, () => {
	console.log(`Servidor rodando na porta http://192.168.0.125:${PORT}`);
});
