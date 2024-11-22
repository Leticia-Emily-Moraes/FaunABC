const express = require("express");
const router = express.Router();
const {
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
	AddMensagem,
	verMensagens,
	verChatsAbertos,
	verChatsInativos,
} = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);
router.post("/loginUser", loginUser);
router.post("/verificaCodigo", verificarCodigo);
router.post("/reenviarCodigo", reenviarCodigo);
router.post("/addAlerta", createAlerta);
router.get("/getAlertas", getAlertas);
router.post("/infosUsers", infosUsers);
router.post("/criarChat", createChat);
router.get("/verChatsDisponiveis", verChatsDisponiveis);
router.get("/verChatsAbertos/:userId", verChatsAbertos);
router.get("/verChatsInativos/:userId", verChatsInativos);
router.post("/enviarMensagen", AddMensagem);
router.get("/verMensagens/:IdChat", verMensagens);

module.exports = router;
