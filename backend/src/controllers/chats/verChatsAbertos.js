const db = require("../../config/db");

const verChatsAbertos = async (req, res) => {
	const { userId } = req.params;
	if (!userId) {
		return res.status(400).json({ error: "Usuário não autenticado." });
	}

	const sql = `
        SELECT 
            c.IdChat,
            c.IdUsuario,
            c.IdBiologo,
            cpf.PrimeiroNome AS NomeUsuario,
            cpf.Sobrenome AS SobrenomeUsuario,
            cb.PrimeiroNome AS NomeBiologo,
            cb.Sobrenome AS SobrenomeBiologo
        FROM Chats c
        LEFT JOIN CadastroPfisico cpf ON c.IdUsuario = cpf.IdPFisico
        LEFT JOIN CadastroBiologo cb ON c.IdBiologo = cb.IdProfissionais
        WHERE 
            (c.IdUsuario = ? || c.IdBiologo = ?)
            AND c.IsAtivo = 1;
    `;

	db.query(sql, [userId, userId], (err, results) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Erro ao buscar chats: " + err.message });
		}

		if (results.length === 0) {
			return res
				.status(200)
				.json({ message: "Não há chats abertos no momento." });
		}

		const response = results.map((chat) => ({
			IdChat: chat.IdChat,
			Usuario: {
				Id: chat.IdUsuario,
				Nome: `${chat.NomeUsuario} ${chat.SobrenomeUsuario}`,
			},
			Biologo: {
				Id: chat.IdBiologo,
				Nome: `${chat.NomeBiologo} ${chat.SobrenomeBiologo}`,
			},
		}));

		res.status(200).json({ Chats: response });
	});
};

module.exports = verChatsAbertos;
