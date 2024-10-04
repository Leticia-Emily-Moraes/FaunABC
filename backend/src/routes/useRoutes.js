const express = require("express");
const router = express.Router();
const { createCadastroUser, createCadastroBio } = require("../controllers");

router.post("/addUser", createCadastroUser);
router.post("/addBio", createCadastroBio);

module.exports = router;
