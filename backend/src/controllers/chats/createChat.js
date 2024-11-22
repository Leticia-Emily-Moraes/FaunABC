const db = require("../../config/db");

const createChat = async (req, res) => {
	const {
		chat: { IdBiologo, IdUser },
	} = req.body;

	if (!IdBiologo || !IdUser) {
		return res
			.status(400)
			.json({ error: "Todos os campos são obrigatórios!" });
	}

	db.beginTransaction((err) => {
		if (err) {
			return res.status(500).json({
				error: "Erro ao iniciar transação: " + err.message,
			});
		}

		const sql = `
			INSERT INTO Chats (IdBiologo, IdUsuario)
			VALUES (?,?)`;

		db.query(sql, [IdBiologo, IdUser], (err, result) => {
			if (err) {
				return db.rollback(() => {
					res.status(500).json({
						error:
							"Erro ao criar o Chat: " +
							err.message,
					});
				});
			}
			db.commit((err) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error:
								"Erro ao finalizar transação: " + err.message,
						});
					});
				}
				res.status(201).json({
					message: "Chat criado com sucesso!",
				});
			});
		});
	});
};

module.exports = createChat;
