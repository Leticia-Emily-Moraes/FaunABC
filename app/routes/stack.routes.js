import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PrimeiraPagina from "../pages/primeiraPagina";
import Home from "../pages/home";
import CadastroDadosUser from "../pages/cadastroDadosUser";
import CadastroEndereco from "../pages/cadastroEndereco";
import EscolhaPerfil from "../pages/escolhaPerfil";
import CadastroDadosPessoaisUser from "../pages/cadastroDadosPessoaisUser";
import CadastroDadosEmergenciasUser from "../pages/cadastroDadosEmergencia";
import CadastroDadosOng from "../pages/cadastroDadosONG";
import CadastroDadosProfissionais from "../pages/cadastroDadosProfissionais";
import ConfirmacaoDeCadastro from "../pages/confirmacaoCadastro";
import Login from "../pages/paginaLogin";
import VerificacaoDuasEtapas from "../pages/verificacaoDuasEtapas";
import RedefinirSenha from "../pages/redefinirSenha";
import Default from "../pages/defaultApp";
const Stack = createStackNavigator();

export function Router() {
	return (
		<Stack.Navigator
			initialRouteName="PrimeiraPagina"
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
		</Stack.Navigator>
	);
}
