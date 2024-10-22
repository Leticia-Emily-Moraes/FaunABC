const express = require("express");
const router = express.Router();
const { createCadastroUser, createCadastroBio, createCadastroOng, loginUser } = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);
router.post("/loginUser", loginUser);

module.exports = router;
