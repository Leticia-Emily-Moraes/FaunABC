const db = require("../config/db");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
	const { email, senha } = req.body;

	if (!email || !senha) {
		return res
			.status(400)
			.json({ error: "Email e senha são obrigatórios!" });
	}

	const sqlSelectLogin = `SELECT * FROM Login WHERE Usuario = ?`;

	db.query(sqlSelectLogin, [email], async (err, result) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Erro no servidor: " + err.message });
		}

		if (result.lenght === 0) {
			return res.status(404).json({ error: "Usuário não encontrado!" });
		}

		const loginData = result[0];

		const encontrado = await bcrypt.compare(senha, loginData.Senha);

		if (!encontrado) {
			return res.status(400).json({ error: "Senha incorreta!" });
		}

		let userId = null;

		if (loginData.TipoUsuario === "PFisico") {
			userId = loginData.IdPessoal;
		} else if (loginData.TipoUsuario === "ONG") {
			userId = loginData.IdOng;
		} else if (loginData.TipoUsuario === "Biologo") {
			userId = loginData.IdBiologo;
		}

		if (!userId) {
			return res
				.status(500)
				.json({ error: "Erro ao identificar o tipo de usuário!" });
		}

		res.status(200).json({
			message: "Login bem-sucedido!",
			userId: userId,
			tipoUsuario: loginData.TipoUsuario,
		});
	});
};

module.exports = loginUser;
