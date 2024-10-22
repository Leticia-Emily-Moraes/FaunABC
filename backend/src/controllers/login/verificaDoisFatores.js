const verificarCodigo = (req, res) => {
    const { email, codigoInserido } = req.body;

    if (req.session.email === email && req.session.codigoDeVerificacao === parseInt(codigoInserido)) {
        console.log("Verificação concluída com sucesso!");
        return res.status(200).json({ message: "Verificação concluída com sucesso!" });
    } else {
        console.log("Erro: Código de verificação incorreto.");
        return res.status(400).json({ error: "Código de verificação incorreto." });
    }
};

module.exports = verificarCodigo;
