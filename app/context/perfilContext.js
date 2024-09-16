import React, { createContext, useState } from "react";

export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
	const [perfil, setPerfil] = useState(1);

	const perfilNome = {
		1: "Pessoal",
		2: "ONG",
		3: "Profissional",
	};

	return (
		<PerfilContext.Provider value={{ perfil, setPerfil, perfilNome }}>
			{children}
		</PerfilContext.Provider>
	);
};
