import React, { createContext, useContext, useState } from "react";
import { enviarDadosUser } from "../service/api/apiCadUser";

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

	const handleSubmit = async () => {
		try {
			console.log("Dados que serão enviados:", dadosCadastroUser);
			await enviarDadosUser(dadosCadastroUser);
			console.log("Dados enviados com sucesso");
		} catch (error) {
			console.error("Erro ao enviar os dados: ", error);
		}
	};
	return (
		<CadastroUserContext.Provider
			value={{ dadosCadastroUser, setDadosCadastroUser, handleSubmit }}
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
