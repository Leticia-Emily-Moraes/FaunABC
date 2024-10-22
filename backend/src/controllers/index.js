const createCadastroUser = require("./user/addUser");
const createCadastroBio = require("./profissional/addProfissional");
const createCadastroOng = require("./ong/addOng");
const loginUser = require("./loginUsers");

module.exports = {
	createCadastroUser,
	createCadastroBio,
	createCadastroOng,
	loginUser,
};
