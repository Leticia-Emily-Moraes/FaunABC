import axios from "axios";
import { API_BASE_URL } from "../../config/config";

export const verMensagens = async (chatId) => {
	try {
		const response = await axios.get(
			`${API_BASE_URL}/api/verMensagens/${chatId}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (response.status === 200) {
			console.log("Dados obtidos com sucesso.");
			return response.data;
		} else {
			console.error(
				"Erro inesperado na resposta da API:",
				response.statusText
			);
			throw new Error("Erro inesperado. Tente novamente mais tarde.");
		}
	} catch (error) {
		if (error.response) {
			console.error("Erro na resposta da API:", error.response.data);
			throw new Error(
				"Erro ao carregar os dados do perfil. Verifique os dados e tente novamente."
			);
		} else if (error.request) {
			console.error("Nenhuma resposta da API:", error.request);
			throw new Error(
				"Não foi possível conectar ao servidor. Verifique sua conexão."
			);
		} else {
			console.error("Erro na configuração da requisição:", error.message);
			throw new Error(
				"Erro ao configurar a requisição. Tente novamente."
			);
		}
	}
};