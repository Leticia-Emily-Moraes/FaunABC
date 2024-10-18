import React from "react";
import {
	Container,
	ContainerButtons,
	ContainerEntrarCom,
	ContainerButtonsEntrarCom,
	TextoNormal,
} from "./style";

import {
	Button,
	LogoPadrao,
	ButtonsRedondos,
	IconeFolha,
	ToggleTheme,
} from "../../components";

import { Apple, Facebook, Google } from "../../assets/imgs";

const PrimeiraPagina = ({ navigation }) => {
	return (
		<Container>
			<ToggleTheme />
			<LogoPadrao />
			<ContainerButtons>
				<Button
					isFull={true}
					title="Cadastre-se"
					onPress={() => navigation.navigate("EscolhaPerfil")}
				/>
				<Button
					isFull={true}
					title="Entrar"
					onPress={() => navigation.navigate("Login")}
				/>
				<ContainerEntrarCom>
					<TextoNormal>Entrar com:</TextoNormal>
					<ContainerButtonsEntrarCom>
						<ButtonsRedondos img={Facebook} />
						<ButtonsRedondos img={Google} />
						<ButtonsRedondos img={Apple} />
					</ContainerButtonsEntrarCom>
				</ContainerEntrarCom>
				<Button
					isFull={true}
					title="Sem Logar"
					//onPress={() => navigation.navigate("Home")}
				/>
			</ContainerButtons>
			<IconeFolha />
		</Container>
	);
};

export default PrimeiraPagina;
