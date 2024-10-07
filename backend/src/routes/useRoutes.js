const express = require("express");
const router = express.Router();
const { createCadastroUser, createCadastroBio, createCadastroOng } = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);
router.post("/addOng", createCadastroOng);

module.exports = router;
