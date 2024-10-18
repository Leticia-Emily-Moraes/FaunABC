const nodemailer = require("nodemailer");

const enviarCodigoDeVerificacao = async (email, codigo) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: "faunaabc@gmail.com",
				pass: "gtyg qcpk rkyq xmsy",
			},
		});

		const mailOptions = {
			from: "faunaabc@gmail.com",
			to: email,
			subject: "Código de Verificação",
			text: `Seu código de verificação é: ${codigo}`,
		};

		await transporter.sendMail(mailOptions);
		console.log("Email enviado com sucesso");
	} catch (error) {
		console.error("Erro ao enviar o email: ", error);
	}
};

module.exports = enviarCodigoDeVerificacao;
