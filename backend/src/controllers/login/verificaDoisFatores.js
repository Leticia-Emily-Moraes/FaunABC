const db = require("../../config/db");

const verificarCodigo = (req, res) => {
    const { email, codigoInserido } = req.body;

    if (
        req.session.email === email &&
        req.session.codigoDeVerificacao === parseInt(codigoInserido)
    ) {
        db.query(
            `SELECT 
                IdLogin, TipoUsuario, 
                CASE 
                    WHEN TipoUsuario = 'PFisico' THEN IdPessoal
                    WHEN TipoUsuario = 'ONG' THEN IdOng
                    WHEN TipoUsuario = 'Biologo' THEN IdBiologo
                END AS UsuarioID
            FROM Login 
            WHERE Usuario = ?`,
            [email],
            (error, results) => {
                if (error) {
                    console.error("Erro ao buscar usuário:", error);
                    return res
                        .status(500)
                        .json({ error: "Erro interno ao buscar usuário." });
                }

                if (results.length > 0) {
                    console.log("Verificação concluída com sucesso!");
                    return res.status(200).json({
                        message: "Verificação concluída com sucesso!",
                        idLogin: results[0].IdLogin,
                        tipoUsuario: results[0].TipoUsuario,
                        usuarioID: results[0].UsuarioID,
                    });
                } else {
                    return res
                        .status(404)
                        .json({ error: "Usuário não encontrado." });
                }
            }
        );
    } else {
        console.log("Erro: Código de verificação incorreto.");
        return res
            .status(400)
            .json({ error: "Código de verificação incorreto." });
    }
};

module.exports = verificarCodigo;
