const db = require("../../config/db");

const verMensagens = async (req, res) => {
    const { IdChat } = req.params;

    const sql = `
        SELECT 
            m.Mensagem, 
            m.IdRemetente,
            l.IdLogin AS IdLogin,
            CASE 
                WHEN l.TipoUsuario = 'PFisico' THEN cpf.PrimeiroNome
                WHEN l.TipoUsuario = 'Biologo' THEN cb.PrimeiroNome
            END AS PrimeiroNome,
            CASE 
                WHEN l.TipoUsuario = 'PFisico' THEN cpf.Sobrenome
                WHEN l.TipoUsuario = 'Biologo' THEN cb.Sobrenome
            END AS Sobrenome,
			CASE 
                WHEN l.TipoUsuario = 'PFisico' THEN l.IdPessoal
                WHEN l.TipoUsuario = 'Biologo' THEN l.IdBiologo
            END AS IdUsuario,
            m.lida,
            DATE_FORMAT(CONVERT_TZ(Enviada, '+00:00', '-03:00'), '%d/%m/%Y %H:%i:%s') AS Enviada
        FROM Mensagens m
        JOIN Login l ON m.IdRemetente = l.IdLogin
        LEFT JOIN CadastroPfisico cpf ON l.IdPessoal = cpf.IdPFisico
        LEFT JOIN CadastroBiologo cb ON l.IdBiologo = cb.IdProfissionais
        WHERE m.IdChat = ?
        ORDER BY m.Enviada ASC;
    `;

    db.query(sql, [IdChat], (err, results) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Erro ao buscar mensagens: " + err.message });
        }

        if (results.length === 0) {
            return res
                .status(200)
                .json({ message: "Não há mensagens para este chat no momento." });
        }

        const response = results.map((mensagem) => ({
            Mensagem: mensagem.Mensagem,
            IdRemetente: mensagem.IdRemetente,
            IdLogin: mensagem.IdLogin,
            IdUsuario: mensagem.IdUsuario,
            PrimeiroNome: mensagem.PrimeiroNome,
            Sobrenome: mensagem.Sobrenome,
            Lida: mensagem.lida,
            Enviada: mensagem.Enviada,
        }));

        res.status(200).json({ Mensagens: response });
    });
};

module.exports = verMensagens;
