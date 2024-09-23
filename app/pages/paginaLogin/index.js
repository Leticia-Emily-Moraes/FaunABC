import React, { useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	ContainerEntrarCom,
	ContainerButtonsEntrarCom,
	TextError,
} from "./style";
import Button from "../../components/button";
import InputEmail from "../../components/inputEmail";
import InputSenha from "../../components/inputSenha";
import IconeFolha from "../../components/iconFolha";

import ButtonRedondo from "../../components/buttonsRedondos";
import apple from "../../assets/imgs/apple.png";
import facebook from "../../assets/imgs/facebook.png";
import google from "../../assets/imgs/google.png";
import Logo from "../../components/logoPadrao";
import Link from "../../components/link";

function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [mensagemErro, setMensagemErro] = useState("");

	const haveEmail = () => {
		if (email) {
			navigation.navigate("VerificacaoDuasEtapas", {
				email: email,
				isPasswordReset: isPasswordReset,
			});
		} else {
			setMensagemErro("Preencha o campo de e-mail");
		}
	};

	const handleVerification = () => {
		if (email || senha) {
			navigation.navigate("VerificacaoDuasEtapas", {
				email: email,
				isPasswordReset: isPasswordReset,
			});
		} else {
			setMensagemErro("Preencha os campos");
		}
	};
	return (
		<Container>
			<Logo />
			<TextoTitulo>Login</TextoTitulo>
			<InputEmail
				value={email}
				onChangeText={setEmail}
			/>
			<InputSenha
				value={senha}
				onChangeText={setSenha}
				secureTextEntry={true}
			/>
			{mensagemErro && <TextError>{mensagemErro}</TextError>}
			<Link
				title="Esqueceu a senha?"
				onPress={() => {
					setIsPasswordReset(true);
					haveEmail();
				}}
			/>
			<Button
				title="Entrar"
				onPress={() => {
					setIsPasswordReset(false);
					handleVerification();
				}}
			/>
			<ContainerEntrarCom>
				<TextoNormal>Entrar com:</TextoNormal>
				<ContainerButtonsEntrarCom>
					<ButtonRedondo img={facebook} />
					<ButtonRedondo img={google} />
					<ButtonRedondo img={apple} />
				</ContainerButtonsEntrarCom>
			</ContainerEntrarCom>
			<IconeFolha />
		</Container>
	);
}

export default Login;
