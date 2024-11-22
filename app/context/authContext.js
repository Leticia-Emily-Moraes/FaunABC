import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [idLogin, setIdLogin] = useState(1);
	const [idUser, setIdUser] = useState("P00001");

	const setUser = (idLogin, idUser) => {
		setIdLogin(idLogin);
		setIdUser(idUser);
	};

	const clearUser = () => {
		setIdLogin(null);
		setIdUser(null);
	};

	return (
		<AuthContext.Provider value={{ idLogin, idUser, setUser, clearUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
