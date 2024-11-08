const express = require("express");
const router = express.Router();
const { createCadastroUser, createCadastroBio, createCadastroOng, loginUser, verificarCodigo, reenviarCodigo, createAlerta } = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);
router.post("/loginUser", loginUser);
router.post("/verificaCodigo", verificarCodigo);
router.post("/reenviarCodigo", reenviarCodigo);
router.post("/addAlerta", createAlerta);

module.exports = router;
