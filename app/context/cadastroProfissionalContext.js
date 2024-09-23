import React, { createContext, useContext, useState } from "react";

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
	return (
		<CadastroProfissionalContext.Provider
			value={{ dadosCadastroProfissional, setDadosCadastroProfissional }}
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
