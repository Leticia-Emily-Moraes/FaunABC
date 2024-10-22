const createCadastroUser = require("./cadastro/addUser");
const createCadastroBio = require("./cadastro/addProfissional");
const createCadastroOng = require("./cadastro/addOng");
const loginUser = require("./login/loginUsers");
const verificarCodigo = require("./login/verificaDoisFatores")
const reenviarCodigo = require("./login/reenviarCodigo")

module.exports = {
	createCadastroUser,
	createCadastroBio,
	createCadastroOng,
	loginUser,
	verificarCodigo,
	reenviarCodigo,
};
