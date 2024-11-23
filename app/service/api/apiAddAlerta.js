import axios from "axios";
import { API_BASE_URL } from "../../config/config";

export const CriarAlerta = async (alertaData) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/api/addAlerta`,
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
