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

import {
	Button,
	InputEmail,
	InputSenha,
	IconeFolha,
	ButtonsRedondos,
	LogoPadrao,
	Link
} from "../../components";
import { Apple, Facebook, Google } from "../../assets/imgs";

function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [mensagemErro, setMensagemErro] = useState("");
	const [isPasswordReset, setIsPasswordReset] = useState("");

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
			<LogoPadrao />
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
					<ButtonsRedondos img={Facebook} />
					<ButtonsRedondos img={Google} />
					<ButtonsRedondos img={Apple} />
				</ContainerButtonsEntrarCom>
			</ContainerEntrarCom>
			<IconeFolha />
		</Container>
	);
}

export default Login;
