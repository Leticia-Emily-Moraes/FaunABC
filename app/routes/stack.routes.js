import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	PrimeiraPagina,
	Home,
	CadastroDadosEmergenciasUser,
	CadastroDadosOng,
	CadastroDadosPessoaisUser,
	AjudasRapidas,
	CadastroDadosProfissionais,
	CadastroDadosUser,
	CadastroEndereco,
	ConfirmacaoDeCadastro,
	Default,
	DefaultOffline,
	EscolhaPerfil,
	Login,
	PerfilOng,
	PerfilPessoal,
	PerfilProfissional,
	PerfilUsuario,
	RedefinirSenha,
	TelefonesOffline,
	VerificacaoDuasEtapas,
} from "../pages";

import CustomDrawerContent from "../components/drawerDefault";
import { PrimeiraPagina, Home, CadastroDadosEmergenciasUser, CadastroDadosOng, CadastroDadosPessoaisUser, AjudasRapidas, CadastroDadosProfissionais, CadastroDadosUser, CadastroEndereco, ConfirmacaoDeCadastro, Default, DefaultOffline, EscolhaPerfil, Login, PerfilOng, PerfilPessoal, PerfilProfissional, PerfilUsuario, RedefinirSenha, TelefonesOffline, VerificacaoDuasEtapas } from "../pages";
import CriarAlerta from "../pages/fazerOcorrencia/index";
import Alertas from "../pages/alertas";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function Router() {
	return (
		<Stack.Navigator
			initialRouteName="DefaultGeral"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="PrimeiraPagina"
				component={PrimeiraPagina}
			/>
			<Stack.Screen
				name="Alertas"
				component={Alertas}
			/>
			<Stack.Screen
				name="CriarAlerta"
				component={CriarAlerta}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="PerfilOng"
				component={PerfilOng}
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
				name="DefaultGeral"
				component={RouterDrawer}
			/>
			<Stack.Screen
				name="DefaultOffline"
				component={DefaultOffline}
			/>
		</Stack.Navigator>
	);
}

export function RouterDrawer() {
	return (
		<Drawer.Navigator
			initialRouteName="Default"
			screenOptions={{ headerShown: false, drawerType: "slide" }}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen
				name="Default"
				component={Default}
			/>
			<Drawer.Screen
				name="Telefones Offline"
				component={TelefonesOffline}
			/>
		</Drawer.Navigator>
	);
}
