const db = require("../../config/db");
const bcrypt = require("bcryptjs");

const formatarData = (data) => {
	const partes = data.split("/");
	return `${partes[2]}-${partes[1]}-${partes[0]}`;
};

const formatarTelefone = (telefone) => {
	return telefone ? telefone.replace(/\D/g, "").substring(0, 15) : "";
};

const formatarCPF = (cpf) => {
	return cpf.replace(/\D/g, "").substring(0, 11);
};

const createCadastroBio = async (req, res) => {
	const {
		cadastroProfissional: {
			primeiroNome,
			sobrenome,
			dataDeNascimento,
			email,
			cpf,
			celular,
			telefone = "",
			senha,
			registroProfissional,
		} = {},
	} = req.body;

	const celularFormatado = formatarTelefone(celular);
	const cpfFormatado = formatarCPF(cpf);
	const telefoneFormatado = telefone ? formatarTelefone(telefone) : null;
	const dataFormatada = formatarData(dataDeNascimento);

	if (
		!primeiroNome ||
		!sobrenome ||
		!dataFormatada ||
		!email ||
		!cpfFormatado ||
		!celularFormatado ||
		!senha ||
		!registroProfissional
	) {
		return res
			.status(400)
			.json({ error: "Todos os campos são obrigatórios!" });
	}

	try {
		const senhaHash = await bcrypt.hash(senha, 10);

		db.beginTransaction((err) => {
			if (err) {
				return res.status(500).json({
					error: "Erro ao iniciar transação: " + err.message,
				});
			}

			const sqlBio = `
			INSERT INTO CadastroBiologo (PrimeiroNome, Sobrenome, Email, Senha, DataDeNascimento, Telefone, Celular, CPF, RegistroProfissional)
			VALUES (?,?,?,?,?,?,?,?,?)`;

			db.query(
				sqlBio,
				[
					primeiroNome,
					sobrenome,
					email,
					senhaHash,
					dataFormatada,
					telefoneFormatado,
					celularFormatado,
					cpfFormatado,
					registroProfissional,
				],
				(err, result) => {
					if (err) {
						return db.rollback(() => {
							res.status(500).json({
								error:
									"Erro ao criar o CadastroProfissional: " +
									err.message,
							});
						});
					}

					// Obtenha o Id do biólogo recém-criado
					const sqlSelectId = `SELECT IdProfissionais FROM CadastroBiologo WHERE Email = ?`;
					db.query(sqlSelectId, [email], (err, result) => {
						if (err) {
							return db.rollback(() => {
								res.status(500).json({
									error: "Erro ao obter ID: " + err.message,
								});
							});
						}

						const idBiologo = result[0].IdProfissionais;

						// Insira os dados na tabela de login
						const sqlLogin = `
						INSERT INTO Login (Usuario, Senha, TipoUsuario, IdBiologo)
						VALUES (?,?,?,?)`;

						db.query(
							sqlLogin,
							[email, senhaHash, 'Biologo', idBiologo],
							(err, result) => {
								if (err) {
									return db.rollback(() => {
										res.status(500).json({
											error: "Erro ao criar login: " + err.message,
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
										message: "Cadastro de biólogo criado com sucesso!",
									});
								});
							},
						);
					});
				},
			);
		});
	} catch (error) {
		return res.status(500).json({
			error: "Erro ao processar os dados: " + error.message,
		});
	}
};

module.exports = createCadastroBio;
