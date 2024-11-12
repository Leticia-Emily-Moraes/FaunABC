import axios from "axios";
import { API_BASE_URL } from "../../config/config"

export const ReenviarCodigo = async (email) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/reenviarCodigo`,
			{
				email,
			},
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
