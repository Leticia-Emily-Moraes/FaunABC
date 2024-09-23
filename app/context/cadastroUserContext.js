import React, { createContext, useContext, useState } from "react";

const CadastroUserContext = createContext();

export function CadastroUserProvider({ children }) {
	const [dadosCadastroUser, setDadosCadastroUser] = useState({
		cadastroPfisico: {
			primeiroNome: "",
			sobrenome: "",
			dataDeNascimento: "",
			email: "",
			cpf: "",
			celular: "",
			telefone: "",
			senha: "",
		},
		cadastroResponsavel: {
			primeiroNome: "",
			sobrenome: "",
			celular: "",
			nivelParental: "",
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
		<CadastroUserContext.Provider
			value={{ dadosCadastroUser, setDadosCadastroUser }}
		>
			{children}
		</CadastroUserContext.Provider>
	);
}
export function UseCadastroUser() {
	const context = useContext(CadastroUserContext);
	if (!context) {
		throw new Error(
			"useCadastro deve ser usado dentro de um CadastroProvider"
		);
	}
	return context;
}
