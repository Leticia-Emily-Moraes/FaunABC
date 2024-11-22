const db = require("../../config/db");

const AddMensagem = async (req, res) => {
	const {
		mensagem: { IdChat, IdRemetente, Mensagem },
	} = req.body;

	if (!IdChat || !IdRemetente || !Mensagem) {
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
			INSERT INTO Mensagens (IdChat, IdRemetente, Mensagem)
			VALUES (?,?,?)`;

		db.query(sql, [IdChat, IdRemetente, Mensagem], (err, result) => {
			if (err) {
				return db.rollback(() => {
					res.status(500).json({
						error: "Erro ao mandar a Mensagem: " + err.message,
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
					message: "Mensagem enviada com sucesso!",
				});
			});
		});
	});
};

module.exports = AddMensagem;
