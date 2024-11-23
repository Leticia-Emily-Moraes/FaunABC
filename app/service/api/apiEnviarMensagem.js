import axios from "axios";
import { API_BASE_URL } from "../../config/config";

export const enviarMensagem = async (dadosDaMensagem) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/api/enviarMensagem`,
			dadosDaMensagem,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		console.log("Mensagem enviada com sucesso:", response.data);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.error("Erro na resposta da API:", error.response.data);
			throw new Error(
				error.response.data.message || "Erro ao enviar a mensagem."
			);
		} else if (error.request) {
			console.error("Nenhuma resposta da API:", error.request);
			throw new Error("A API não respondeu. Tente novamente mais tarde.");
		} else {
			console.error("Erro na configuração da requisição:", error.message);
			throw new Error("Erro ao configurar o envio. Verifique os dados.");
		}
	}
};
