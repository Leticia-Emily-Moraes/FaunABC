const db = require("../../config/db");
const bcrypt = require("bcryptjs");

const createCadastroUser = async (req, res) => {
	const {
		cadastroPfisico: {
			primeiroNome,
			sobrenome,
			dataDeNascimento,
			email,
			cpf,
			celular,
			telefone = "",
			senha,
		},
		cadastroResponsavel: {
			primeiroNome: primeiroNomeRes,
			sobrenome: sobrenomeRes,
			celular: celularRes,
			nivelParental,
		},
		endereco: { logradouro, numero, bairro, cidade, cep },
	} = req.body;

	const dataFormatada = formatarData(dataDeNascimento);
	const cpfFormatado = formatarCPF(cpf);
	const celularFormatado = formatarTelefone(celular);
	const telefoneFormatado = telefone ? formatarTelefone(telefone) : null;
	const celularResFormatado = formatarTelefone(celularRes);
	const senhaHash = await bcrypt.hash(senha, 10);

	if (
		!primeiroNome ||
		!sobrenome ||
		!dataFormatada ||
		!email ||
		!cpfFormatado ||
		!celularFormatado ||
		!senhaHash ||
		!primeiroNomeRes ||
		!sobrenomeRes ||
		!celularResFormatado ||
		!nivelParental ||
		!logradouro ||
		!numero ||
		!bairro ||
		!cidade ||
		!cep
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
            INSERT INTO CadastroPfisico (PrimeiroNome, Sobrenome, DataDeNascimento, Email, CPF, Celular, Telefone, Senha)
            VALUES (?,?,?,?,?,?,?,?)`;
		db.query(
			sqlUser,
			[
				primeiroNome,
				sobrenome,
				dataFormatada,
				email,
				cpfFormatado,
				celularFormatado,
				telefoneFormatado,
				senhaHash,
			],
			(err, result) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error: "Erro ao criar CadastroUser: " + err.message,
						});
					});
				}

				const sqlSelectId = `SELECT IdPFisico FROM CadastroPfisico WHERE Email = ?`;
				db.query(sqlSelectId, [email], (err, result) => {
					if (err) {
						return db.rollback(() => {
							res.status(500).json({
								error: "Erro ao obter ID: " + err.message,
							});
						});
					}

					const idUser = result[0].IdPFisico;

					const sqlResponsavel = `
                    INSERT INTO CadastroResponsavel (PrimeiroNome, Sobrenome, Celular, NivelParental, IdUser)
                    VALUES (?,?,?,?,?)`;
					db.query(
						sqlResponsavel,
						[
							primeiroNomeRes,
							sobrenomeRes,
							celularResFormatado,
							nivelParental,
							idUser,
						],
						(err, result) => {
							if (err) {
								return db.rollback(() => {
									res.status(500).json({
										error:
											"Erro ao criar CadastroResponsavel: " +
											err.message,
									});
								});
							}

							const sqlEndereco = `
                        INSERT INTO Endereco (Logradouro, Numero, Bairro, Cidade, Cep, IdUser)
                        VALUES (?,?,?,?,?,?)`;
							db.query(
								sqlEndereco,
								[
									logradouro,
									numero,
									bairro,
									cidade,
									cep,
									idUser,
								],
								(err, result) => {
									if (err) {
										return db.rollback(() => {
											res.status(500).json({
												error:
													"Erro ao criar Endereço: " +
													err.message,
											});
										});
									}

									const sqlLogin = `
                            INSERT INTO Login (Usuario, Senha, TipoUsuario, IdPessoal)
                            VALUES (?,?,?,?)`;
									db.query(
										sqlLogin,
										[email, senhaHash, "PFisico", idUser],
										(err, result) => {
											if (err) {
												return db.rollback(() => {
													res.status(500).json({
														error:
															"Erro ao criar Login: " +
															err.message,
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
													message:
														"Cadastro criado com sucesso!",
												});
											});
										},
									);
								},
							);
						},
					);
				});
			},
		);
	});
};

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

module.exports = createCadastroUser;
