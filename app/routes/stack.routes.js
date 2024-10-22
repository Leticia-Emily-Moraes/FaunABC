import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PrimeiraPagina, Home, CadastroDadosEmergenciasUser, CadastroDadosOng, CadastroDadosPessoaisUser, AjudasRapidas, CadastroDadosProfissionais, CadastroDadosUser, CadastroEndereco, ConfirmacaoDeCadastro, Default, DefaultOffline, EscolhaPerfil, Login, PerfilOng, PerfilPessoal, PerfilProfissional, PerfilUsuario, RedefinirSenha, TelefonesOffline, VerificacaoDuasEtapas } from "../pages";
const Stack = createStackNavigator();

export function Router() {
	return (
		<Stack.Navigator
			initialRouteName="Default"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="PrimeiraPagina"
				component={PrimeiraPagina}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="CadastroDadosUser"
				component={CadastroDadosUser}
			/>
			<Stack.Screen
				name="CadastroEndereco"
				component={CadastroEndereco}
			/>
			<Stack.Screen
				name="CadastroDadosPessoaisUser"
				component={CadastroDadosPessoaisUser}
			/>
			<Stack.Screen
				name="CadastroDadosEmergenciasUser"
				component={CadastroDadosEmergenciasUser}
			/>
			<Stack.Screen
				name="EscolhaPerfil"
				component={EscolhaPerfil}
			/>
			<Stack.Screen
				name="CadastroDadosOng"
				component={CadastroDadosOng}
			/>
			<Stack.Screen
				name="CadastroDadosProfissionais"
				component={CadastroDadosProfissionais}
			/>
			<Stack.Screen
				name="ConfirmacaoDeCadastro"
				component={ConfirmacaoDeCadastro}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				name="VerificacaoDuasEtapas"
				component={VerificacaoDuasEtapas}
			/>
			<Stack.Screen
				name="RedefinirSenha"
				component={RedefinirSenha}
			/>
			<Stack.Screen
				name="Default"
				component={Default}
			/>
			<Stack.Screen
				name="DefaultOffline"
				component={DefaultOffline}
			/>
		</Stack.Navigator>
	);
}
