import axios from "axios";

export const Login = async (email,senha) => {
	try {
		const response = await axios.post(
			"http://192.168.200.156:3001/api/loginUser",
			{
                email,
                senha,
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
