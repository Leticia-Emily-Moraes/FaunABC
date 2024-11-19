const db = require("../../config/db");

const infosUsers = async (req, res) => {
	const { idLogin } = req.body;

	if (!idLogin) {
		return res.status(401).json({ error: "Id de Login é obrigatório!" });
	}

	const sqlSelectLogin = `SELECT * FROM Login WHERE IdLogin = ?`;
	db.query(sqlSelectLogin, [idLogin], (err, loginResult) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Erro ao buscar Login: " + err.message });
		}

		if (loginResult.length === 0) {
			return res
				.status(200)
				.json({ message: "Usuário não existe ou não tem Login" });
		}

		const userLogin = loginResult[0];
		let sqlSelectUserData,
			userId = false;

		switch (userLogin.TipoUsuario) {
			case "PFisico":
				sqlSelectUserData = `
					SELECT 
						CadastroPfisico.*, 
						CadastroResponsavel.PrimeiroNome AS ResponsavelPrimeiroNome,
						CadastroResponsavel.Sobrenome AS ResponsavelSobrenome,
						CadastroResponsavel.Celular AS ResponsavelCelular,
						CadastroResponsavel.NivelParental
					FROM CadastroPfisico
					LEFT JOIN CadastroResponsavel 
					ON CadastroPfisico.IdPFisico = CadastroResponsavel.IdUser
					WHERE CadastroPfisico.IdPFisico = ?`;
				userId = userLogin.IdPessoal;
				break;
			case "ONG":
				sqlSelectUserData = `SELECT 
					CadastroONG.*,
					Endereco.Logradouro AS Rua,
					Endereco.Cidade AS Cidade,
					Endereco.Cep AS Cep
				FROM CadastroONG
				LEFT JOIN Endereco
				ON CadastroONG.IdONG = Endereco.IdOng
				WHERE CadastroONG.IdONG = ?`;
				userId = userLogin.IdOng;
				break;
			case "Biologo":
				sqlSelectUserData = `SELECT * FROM CadastroBiologo WHERE IdProfissionais = ?`;
				userId = userLogin.IdBiologo;
				break;
			default:
				return res
					.status(400)
					.json({ error: "Tipo de usuário inválido!" });
		}

		if (!userId) {
			return res
				.status(400)
				.json({ error: "ID do usuário não encontrado!" });
		}

		db.query(sqlSelectUserData, [userId], (err, resultUser) => {
			if (err) {
				return res.status(500).json({
					error: "Erro ao buscar dados do usuário: " + err.message,
				});
			}

			if (resultUser.length === 0) {
				return res
					.status(404)
					.json({ message: "Dados do usuário não encontrados." });
			}

			const userData = resultUser[0];
			let response;
			switch (userLogin.TipoUsuario) {
				case "PFisico":
					response = {
						IdUser: userId,
						PrimeiroNome: userData.PrimeiroNome,
						Sobrenome: userData.Sobrenome,
						Email: userData.Email,
						IdLogin: userLogin.IdLogin,
						TipoUsuario: userLogin.TipoUsuario,
						Responsavel: {
							PrimeiroNome:
								userData.ResponsavelPrimeiroNome || null,
							Sobrenome: userData.ResponsavelSobrenome || null,
							Celular: userData.ResponsavelCelular || null,
							NivelParental: userData.NivelParental || null,
						},
					};
					break;
				case "ONG":
					response = {
						IdUser: userId,
						NomeOng: userData.NomeONG,
						Email: userData.Email,
						IdLogin: userLogin.IdLogin,
						TipoUsuario: userLogin.TipoUsuario,
						Endereco: {
							Rua: userData.Rua,
							Cidade: userData.Cidade,
							Cep: userData.Cep,
						},
					};
					break;
				case "Biologo":
					response = {
						IdUser: userId,
						PrimeiroNome: userData.PrimeiroNome,
						Sobrenome: userData.Sobrenome,
						Email: userData.Email,
						IdLogin: userLogin.IdLogin,
						TipoUsuario: userLogin.TipoUsuario,
						RegistroBiologo: userData.RegistroProfissional,
					};
					break;
				default:
					return res
						.status(400)
						.json({ error: "Tipo de usuário inválido!" });
			}
			res.status(200).json({ userData: response });
		});
	});
};

module.exports = infosUsers;
