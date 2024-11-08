import axios from "axios";

export const CriarAlerta = async (alertaData) => {
	try {
		const response = await axios.post(
			"http://192.168.1.176:3001/api/addAlerta",
			alertaData,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		console.log("Alerta criado com sucesso: ", response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error("Erro na resposta da API: ", error.response.data);
		} else if (error.request) {
			console.error("Nenhuma resposta da API: ", error.request);
		} else {
			console.error(
				"Erro na configuração da requesição: ",
				error.message
			);
		}
	}
};
