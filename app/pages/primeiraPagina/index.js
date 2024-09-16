import React from "react";
import {
	Container,
	ContainerButtons,
	ContainerEntrarCom,
	ContainerButtonsEntrarCom,
	TextoNormal,
} from "./style";
import Button from "../../components/button";
import Logo from "../../components/logoPadrao";
import ButtonRedondo from "../../components/buttonsRedondos";
import apple from "../../assets/imgs/apple.png";
import facebook from "../../assets/imgs/facebook.png";
import google from "../../assets/imgs/google.png";
import ToggleTheme from "../../components/toggleTheme";
import IconeFolha from "../../components/iconFolha"

const PrimeiraPagina = ({ navigation }) => {
	return (
		<Container>
			<ToggleTheme />
			<Logo />
			<ContainerButtons>
				<Button
					title="Cadastre-se"
					onPress={() => navigation.navigate("EscolhaPerfil")}
				/>
				<Button
					title="Entrar"
					onPress={() => navigation.navigate("Login")}
				/>
				<ContainerEntrarCom>
					<TextoNormal>Entrar com:</TextoNormal>
					<ContainerButtonsEntrarCom>
						<ButtonRedondo img={facebook} />
						<ButtonRedondo img={google} />
						<ButtonRedondo img={apple} />
					</ContainerButtonsEntrarCom>
				</ContainerEntrarCom>
				<Button 
				title="Sem Logar" 
				// onPress={() => navigation.navigate("")}
				/>
			</ContainerButtons>
			<IconeFolha/>
		</Container>
	);
};

export default PrimeiraPagina;
