const express = require("express");
const router = express.Router();
const { createCadastroUser } = require("../controllers").default;

router.get("/addUser", createCadastroUser);

module.exports = router;
