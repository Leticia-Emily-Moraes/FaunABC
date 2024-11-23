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

		const checkChatSql = `SELECT IdChat FROM Chats WHERE IdBiologo = ? AND IdUsuario = ? LIMIT 1`;
		db.query(checkChatSql, [IdBiologo, IdUser], (err, results) => {
			if (err) {
				return db.rollback(() => {
					res.status(500).json({
						error: "Erro ao verificar chat existente: " + err.message,
					});
				});
			}

			if (results.length > 0) {
				return db.rollback(() => {
					res.status(200).json({
						message: "Chat já existe!",
						chatId: results[0].IdChat,
					});
				});
			}

			const sql = `INSERT INTO Chats (IdBiologo, IdUsuario) VALUES (?,?)`;
			db.query(sql, [IdBiologo, IdUser], (err, result) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error: "Erro ao criar o Chat: " + err.message,
						});
					});
				}
				db.commit((err) => {
					if (err) {
						return db.rollback(() => {
							res.status(500).json({
								error: "Erro ao finalizar transação: " + err.message,
							});
						});
					}
					res.status(201).json({
						message: "Chat criado com sucesso!",
						chatId: result.insertId,
					});
				});
			});
		});
	});
};

module.exports = createChat;
