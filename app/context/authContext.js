import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [idLogin, setIdLogin] = useState(null);

	const setUser = (id) => {
		setIdLogin(id);
	};

	const clearUser = () => {
		setIdLogin(null);
	};

	return (
		<AuthContext.Provider value={{ idLogin, setUser, clearUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
