const express = require("express");
const router = express.Router();
const { createCadastroUser, createCadastroBio, createCadastroOng, loginUser, verificarCodigo, reenviarCodigo, createAlerta, getAlertas, infosUsers} = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);
router.post("/loginUser", loginUser);
router.post("/verificaCodigo", verificarCodigo);
router.post("/reenviarCodigo", reenviarCodigo);
router.post("/addAlerta", createAlerta);
router.get("/getAlertas", getAlertas);
router.post("/infosUsers", infosUsers);

module.exports = router;
