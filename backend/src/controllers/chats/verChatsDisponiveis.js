const db = require("../../config/db");

const verChatsDisponiveis = async (req, res) => {
	const sql = `
        SELECT IdProfissionais, PrimeiroNome, Sobrenome 
        FROM CadastroBiologo;
    `;

	db.query(sql, (err, results) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Erro ao buscar biólogos: " + err.message });
		}

		if (results.length === 0) {
			return res
				.status(200)
				.json({ message: "Não há biólogos para contato no momento." });
		}

		const response = results.map((biologo) => ({
			IdProfissionais: biologo.IdProfissionais,
			PrimeiroNome: biologo.PrimeiroNome,
			Sobrenome: biologo.Sobrenome,
		}));

		res.status(200).json({ Chats: response });
	});
};

module.exports = verChatsDisponiveis;
