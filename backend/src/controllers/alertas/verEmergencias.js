const db = require("../../config/db");

const Emergencias = async (req, res) => {
    const sql = `
        SELECT * FROM NumsEmergencia;
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

module.exports = Emergencias;
