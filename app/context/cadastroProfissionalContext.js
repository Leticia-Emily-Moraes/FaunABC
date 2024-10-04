import React, { createContext, useContext, useState } from "react";

import { enviarDadosBio } from "../service/api/apiCadBio";
const CadastroProfissionalContext = createContext();

export function CadastroProfissionalProvider({ children }) {
	const [dadosCadastroProfissional, setDadosCadastroProfissional] = useState({
		cadastroProfissional: {
			primeiroNome: "",
			sobrenome: "",
			dataDeNascimento: "",
			email: "",
			cpf: "",
			celular: "",
			telefone: "",
			senha: "",
			registroProfissional: "",
		},
	});

	const handleSubmit = async () => {
		console.log("Enviando para API:", dadosCadastroProfissional);
		try {
			await enviarDadosBio(dadosCadastroProfissional);
			console.log("Dados enviados com sucesso");
		} catch (error) {
			console.log("Erro ao enviar os dados: ", error);
		}
	};
	
	return (
		<CadastroProfissionalContext.Provider
			value={{
				dadosCadastroProfissional,
				setDadosCadastroProfissional,
				handleSubmit,
			}}
		>
			{children}
		</CadastroProfissionalContext.Provider>
	);
}
export function UseCadastroProfissional() {
	const context = useContext(CadastroProfissionalContext);
	if (!context) {
		throw new Error(
			"CadastroProfissional deve ser usado dentro de um CadastroProvider"
		);
	}
	return context;
}
