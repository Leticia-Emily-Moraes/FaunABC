import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./routes/stack.routes";
import "react-native-gesture-handler";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { PerfilProvider } from "./context/perfilContext";
import { ProvedorFonte, UseFonte } from "./context/fonteContext";
import { ThemeProvider, useTheme } from "./context/themeContext";
import { LoadingContainer } from "./style";

function MainApp() {
	const { fontsLoaded } = UseFonte();
	const { theme } = useTheme();

	if (!fontsLoaded) {
		return <LoadingContainer />;
	}

	return (
		<StyledThemeProvider theme={theme}>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</StyledThemeProvider>
	);
}

function App() {
	return (
		<ThemeProvider>
			<ProvedorFonte>
				<PerfilProvider>
					<MainApp />
				</PerfilProvider>
			</ProvedorFonte>
		</ThemeProvider>
	);
}

export default App;