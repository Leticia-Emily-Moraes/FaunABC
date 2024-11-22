const createCadastroUser = require("./cadastro/addUser");
const createCadastroBio = require("./cadastro/addProfissional");
const createCadastroOng = require("./cadastro/addOng");
const loginUser = require("./login/loginUsers");
const verificarCodigo = require("./login/verificaDoisFatores");
const reenviarCodigo = require("./login/reenviarCodigo");
const createAlerta = require("./alertas/addAlerta");
const getAlertas = require("./alertas/verAlertas");
const infosUsers = require("./perfils/trazerInfosPerfis");
const createChat = require("./chats/createChat");
const verChatsDisponiveis = require("./chats/verChatsDisponiveis");
const verChatsAbertos = require("./chats/verChatsAbertos");
const verChatsInativos = require("./chats/verChatsInativos");
const AddMensagem = require("./chats/addMensagem");
const verMensagens = require("./chats/verMensagens");

module.exports = {
	createCadastroUser,
	createCadastroBio,
	createCadastroOng,
	loginUser,
	verificarCodigo,
	reenviarCodigo,
	createAlerta,
	getAlertas,
	infosUsers,
	createChat,
	verChatsDisponiveis,
	verChatsAbertos,
	verChatsInativos,
	AddMensagem,
	verMensagens,
};
