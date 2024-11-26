import axios from "axios";
import { API_BASE_URL } from "../../config/config";

export const VerEmergencias = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/api/getLocEmergencias`);
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar alertas:", error);
		return { error: "Erro ao buscar alertas. Tente novamente." };
	}
};
