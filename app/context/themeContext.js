import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(lightTheme);

	useEffect(() => {
		const colorScheme = Appearance.getColorScheme();
		setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
		const subscription = Appearance.addChangeListener(({ colorScheme }) => {
			setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
		});
		return () => {
			subscription.remove();
		};
	}, []);

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === lightTheme ? darkTheme : lightTheme
		);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
