const db = require("../../config/db");

const createAlerta = async (req, res) => {
	const {
		alerta: {
			titulo,
			tipoAlerta,
			logradouro,
			bairro,
			cidade,
			cep,
			idAutor,
		},
	} = req.body;

	if (
		!titulo ||
		!tipoAlerta ||
		!logradouro ||
		!bairro ||
		!cidade ||
		!cep ||
		!idAutor
	) {
		return res
			.status(400)
			.json({ error: "Todos os campos são obrigatórios!" });
	}

	db.beginTransaction((err) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Erro ao iniciar transação: " + err.message });
		}

		const sqlUser = `
            INSERT INTO Alerta (Titulo, TipoDoAlerta, Logradouro, Bairro, Cidade, Cep, IdAutor)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

		db.query(
			sqlUser,
			[titulo, tipoAlerta, logradouro, bairro, cidade, cep, idAutor],
			(err, result) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error: "Erro ao criar Alerta: " + err.message,
						});
					});
				}
				db.commit((err) => {
					if (err) {
						return db.rollback(() => {
							res.status(500).json({
								error:
									"Erro ao finalizar transação: " +
									err.message,
							});
						});
					}

					res.status(201).json({
						message: "Alerta criado com sucesso!",
					});
				});
			},
		);
	});
};

module.exports = createAlerta;
