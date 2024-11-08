const mysql = require("mysql2"); // Usando a versão tradicional do mysql2
const db = require("../../config/db"); // Configuração do banco de dados

const verificarCodigo = (req, res) => {
	const { email, codigoInserido } = req.body;

	// Verifica se o código e o email na sessão correspondem
	if (
		req.session.email === email &&
		req.session.codigoDeVerificacao === parseInt(codigoInserido)
	) {
		// Usando a versão tradicional do mysql2 com callbacks
		db.query(
			"SELECT IdLogin FROM Login WHERE Usuario = ?",
			[email],
			(error, results) => {
				if (error) {
					console.error("Erro ao buscar usuário:", error);
					return res
						.status(500)
						.json({ error: "Erro interno ao buscar usuário." });
				}

				// Verifica se o usuário foi encontrado
				if (results.length > 0) {
					console.log("Verificação concluída com sucesso!");
					return res.status(200).json({
						message: "Verificação concluída com sucesso!",
						idLogin: results[0].IdLogin, // Acessa o resultado da consulta
					});
				} else {
					return res
						.status(404)
						.json({ error: "Usuário não encontrado." });
				}
			},
		);
	} else {
		console.log("Erro: Código de verificação incorreto.");
		return res
			.status(400)
			.json({ error: "Código de verificação incorreto." });
	}
};

module.exports = verificarCodigo;
