import React, { createContext, useContext, useState } from "react";

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
	return (
		<CadastroOngContext.Provider
			value={{ dadosCadastroOng, setDadosCadastroOng}}
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
