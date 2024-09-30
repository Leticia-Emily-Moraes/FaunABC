const db = require("../../config/db");

const createCadastroUser = (req, res) => {
	const {
		PrimeiroNome,
		Sobrenome,
		DataDeNascimento,
		Email,
		CPF,
		Celular,
		Telefone,
		Senha,
		Responsavel,
		Endereco,
	} = req.body;

	if (
		!PrimeiroNome ||
		!Sobrenome ||
		!DataDeNascimento ||
		!Email ||
		!CPF ||
		!Celular ||
		!Senha ||
		!Responsavel ||
		!Endereco
	) {
		return res
			.status(400)
			.json({ error: "Todos os campos são obrigatórios" });
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
				PrimeiroNome,
				Sobrenome,
				DataDeNascimento,
				Email,
				CPF,
				Celular,
				Telefone,
				Senha,
			],
			(err, result) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error: "Erro ao criar CadastroUser: " + err.message,
						});
					});
				}

				const idUser = result.insertId;

				const { PrimeiroNomeRes, SobrenomeRes, CelularRes, NivelParental } =
					Responsavel;

				const sqlResponsavel = `
            INSERT INTO CadastroResponsavel (PrimeiroNome, Sobrenome, Celular, NivelParental, IdUser)
            VALUES (?,?,?,?,?)`;

				db.query(
					sqlResponsavel,
					[
						PrimeiroNomeRes,
						SobrenomeRes,
						CelularRes,
						NivelParental,
						idUser,
					],
					(err, result) => {
						if (err) {
							return db.rollback(() => {
								res.status(500).json({
									error: "Erro ao criar CadastroResponsavel: " + err.message,
								});
							});
						}

						const { Logradouro, Numero, Bairro, Cidade, Cep } = Endereco;

						const sqlEndereco = `
                        INSERT INTO Endereco (Logradouro, Numero, Bairro, Cidade, Cep, IdUser)
                        VALUES (?,?,?,?,?,?)`;

						db.query(
							sqlEndereco,
							[Logradouro, Numero, Bairro, Cidade, Cep, idUser],
							(err, result) => {
								if (err) {
									return db.rollback(() => {
										res.status(500).json({
											error: "Erro ao criar Endereço: " + err.message,
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
										message: "Cadastro criado com sucesso!",
									});
								});
							}
						);
					}
				);
			}
		);
	});
};

module.exports = createCadastroUser;
