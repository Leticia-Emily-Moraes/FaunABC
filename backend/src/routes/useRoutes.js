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
	Emergencias
} = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);
router.post("/loginUser", loginUser);
router.post("/verificaCodigo", verificarCodigo);
router.post("/reenviarCodigo", reenviarCodigo);
router.post("/addAlerta", createAlerta);
router.get("/getAlertas", getAlertas);
router.get("/getLocEmergencias", Emergencias);
router.post("/infosUsers", infosUsers);
router.post("/criarChat", createChat);
router.get("/verChatsDisponiveis", verChatsDisponiveis);
router.get("/verChatsAbertos/:userId", verChatsAbertos);
router.get("/verChatsInativos/:userId", verChatsInativos);
router.post("/enviarMensagem", AddMensagem);
router.get("/verMensagens/:IdChat", verMensagens);

module.exports = router;
