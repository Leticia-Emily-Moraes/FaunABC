import React, { createContext, useContext, useState } from "react";
import { enviarDadosONG } from "../service/api/apiCadOng";

const CadastroOngContext = createContext();

export function CadastroOngProvider({ children }) {
	const [dadosCadastroOng, setDadosCadastroOng] = useState({
		CadastroOng: {
			NomeOng: "",
			email: "",
			telefone: "",
			celular: "",
			cnpj: "",
			inss: "",
			senha: "",
		},
		endereco: {
			logradouro: "",
			numero: "",
			bairro: "",
			cidade: "",
			cep: "",
		},
	});

	const handleSubmit = async () => {
		try {
			console.log("Dados que serão enviados:", dadosCadastroOng);
			await enviarDadosONG(dadosCadastroOng);
			console.log("Dados enviados com sucesso");
		} catch (error) {
			console.error("Erro ao enviar os dados: ", error);
		}
	};

	return (
		<CadastroOngContext.Provider
			value={{ dadosCadastroOng, setDadosCadastroOng, handleSubmit}}
		>
			{children}
		</CadastroOngContext.Provider>
	);
}
export function UseCadastroOng() {
	const context = useContext(CadastroOngContext);
	if (!context) {
		throw new Error(
			"CadastroOng deve ser usado dentro de um CadastroProvider"
		);
	}
	return context;
}
