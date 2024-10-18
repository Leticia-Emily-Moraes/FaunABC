const db = require("../../config/db");
const crypto = require("crypto");
const enviarCodigoDeVerificacao = require("../../utils/envioCodigo");

const reenviarCodigo = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email é obrigatório!" });
    }

    const sqlSelectUser = `SELECT * FROM Login WHERE Usuario = ?`;
    db.query(sqlSelectUser, [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erro no servidor: " + err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "Usuário não encontrado!" });
        }

        const loginData = result[0];

        const novoCodigo = crypto.randomInt(100000, 999999);
        req.session.codigoDeVerificacao = novoCodigo;
        req.session.email = email;

        try {
            await enviarCodigoDeVerificacao(email, novoCodigo);
            res.status(200).json({ message: "Novo código de verificação enviado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao enviar o código de verificação." });
        }
    });
};

module.exports = reenviarCodigo;
