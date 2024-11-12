const db = require("../../config/db");

const getAlertas = async (req, res) => {
    const sql = `
        SELECT a.*, 
            DATE_FORMAT(a.DataAlerta, '%d/%m/%Y') AS DataPublicacao,
            CASE 
                WHEN u.TipoUsuario = 'PFisico' THEN CONCAT(p.PrimeiroNome, ' ', p.Sobrenome)
                WHEN u.TipoUsuario = 'ONG' THEN o.NomeONG
                WHEN u.TipoUsuario = 'Biologo' THEN CONCAT(b.PrimeiroNome, ' ', b.Sobrenome)
                ELSE 'Autor desconhecido'
            END AS Autor
        FROM Alerta a
        JOIN Login u ON a.IdAutor = u.IdLogin
        LEFT JOIN CadastroPfisico p ON u.IdPessoal = p.IdPFisico
        LEFT JOIN CadastroONG o ON u.IdOng = o.IdONG
        LEFT JOIN CadastroBiologo b ON u.IdBiologo = b.IdProfissionais
        WHERE a.IsActive = 1;
    `;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar alertas: " + err.message });
        }

        if (result.length === 0) {
            return res.status(200).json({ message: "Não há alertas no momento." });
        }

        res.status(200).json(result);
    });
};

module.exports = getAlertas;
