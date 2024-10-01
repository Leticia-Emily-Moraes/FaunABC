const express = require("express");
const router = express.Router();
const { createCadastroUser } = require("../controllers");

router.post("/addUser", createCadastroUser);

module.exports = router;
