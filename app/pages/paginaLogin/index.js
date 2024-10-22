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
	Link,
} from "../../components";
import { Apple, Facebook, Google } from "../../assets/imgs";
import { Login as loginAPI } from "../../service/api/apiLogin";

function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [mensagemErro, setMensagemErro] = useState("");
	const [isPasswordReset, setIsPasswordReset] = useState(false);

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

	const handleVerification = async () => {
		if (!email || !senha) {
			setMensagemErro("Preencha os campos");
			return;
		}

		try {
			const data = await loginAPI(email, senha);
			navigation.navigate("VerificacaoDuasEtapas", {
				email: email,
				isPasswordReset: isPasswordReset,
			});
		} catch (error) {
			setMensagemErro(
				"Erro ao realizar login. Verifique suas credenciais."
			);
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
