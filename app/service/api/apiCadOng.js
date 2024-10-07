import axios from "axios";

export const enviarDadosONG = async (dadosCadastroOng) => {
	try {
		const response = await axios.post(
			"http://172.25.0.101:3001/api/addOng",
			dadosCadastroOng,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		console.log("Dados enviados com sucesso:", response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error("Erro na resposta da API:", error.response.data);
		} else if (error.request) {
			console.error("Nenhuma resposta da API:", error.request);
		} else {
			console.error("Erro na configuração da requisição:", error.message);
		}
		throw error;
	}
};
