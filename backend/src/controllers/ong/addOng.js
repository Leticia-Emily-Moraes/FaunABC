const db = require("../../config/db");
const bcrypt = require("bcryptjs");

const formatarCNPJ = (cnpj) => {
	return cnpj.replace(/\D/g, "").substring(0, 14);
};

const formatarTelefone = (telefone) => {
	return telefone ? telefone.replace(/\D/g, "").substring(0, 15) : "";
};

const formatarINSS = (inss) => {
	return inss.replace(/\D/g, "").substring(0, 11);
};

const createCadastroOng = async (req, res) => {
	const {
		CadastroOng: { NomeOng, email, telefone, celular, cnpj, inss, senha },
		endereco: { logradouro, numero, bairro, cidade, cep },
	} = req.body;

	const celularFormatado = formatarTelefone(celular);
	const telefoneFormatado = telefone ? formatarTelefone(telefone) : null;
	const senhaHash = await bcrypt.hash(senha, 10);
	const cnpjFormatado = formatarCNPJ(cnpj);
	const inssFormatado = formatarINSS(inss);

	if (
		!NomeOng ||
		!email ||
		!cnpjFormatado ||
		!inssFormatado ||
		!celularFormatado ||
		!senhaHash ||
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

		const sqlOng = `
        INSERT INTO CadastroONG (NomeONG, Email, Telefone, Celular, CNPJ, INSS, Senha)
        VALUES (?,?,?,?,?,?,?)`;
		db.query(
			sqlOng,
			[
				NomeOng,
				email,
				telefoneFormatado,
				celularFormatado,
				cnpjFormatado,
				inssFormatado,
				senhaHash,
			],
			(err, result) => {
				if (err) {
					return db.rollback(() => {
						res.status(500).json({
							error:
								"Erro ao criar o CadastroOng: " + err.message,
						});
					});
				}
				const sqlSelectId = `SELECT IdONG FROM CadastroONG WHERE Email = ?`;
				db.query(sqlSelectId, [email], (err, result) => {
					if (err) {
						return res.status(500).json({
							error: "Erro ao obter ID: " + err.message,
						});
					}

					const IdOng = result[0].IdONG;

					const sqlEndereco = `
                        INSERT INTO Endereco (Logradouro, Numero, Bairro, Cidade, Cep, IdOng)
                        VALUES (?,?,?,?,?,?)`;
					db.query(
						sqlEndereco,
						[logradouro, numero, bairro, cidade, cep, IdOng],
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
									message: "Cadastro criado com sucesso!",
								});
							});
						},
					);
				});
			},
		);
	});
};

module.exports = createCadastroOng;
