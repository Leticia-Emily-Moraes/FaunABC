import React, { useState } from "react";
import { Container, ContainerInputs, TextoTitulo, TextError } from "./style";
import Button from "../../components/button";
import InputSenha from "../../components/inputSenha";
import IconeFolha from "../../components/iconFolha";

function RedefinirSenha({ navigation }) {
	const [senha, setSenha] = useState("");
	const [confirmaSenha, setConfirmaSenha] = useState("");
	const [isSenhaValida, setIsSenhaValida] = useState(true);
	const [errorMensagem, setErrorMensagem] = useState("");

	const handleConfirmarSenhaChange = (text) => {
		setConfirmaSenha(text);
		if (text !== senha) {
			setIsSenhaValida(false);
			setErrorMensagem("As senhas não coincidem");
		} else {
			setIsSenhaValida(true);
			setErrorMensagem("");
		}
	};

	const verificandoPreenchimento = () => {
		if (!senha || !confirmaSenha) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		}
		if (isSenhaValida) {
			navigation.navigate("Login");
		}
	};

	return (
		<Container>
			<TextoTitulo>Redefinir senha</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputSenha
					TituloDoInput="Nova senha:"
					value={senha}
					onChangeText={setSenha}
					secureTextEntry={true}
				/>
				<InputSenha
					TituloDoInput="Confirme nova senha:"
					value={confirmaSenha}
					onChangeText={handleConfirmarSenhaChange}
					placeholder="Confirmar senha"
					secureTextEntry={true}
				/>
			</ContainerInputs>
			<Button
				title="Redefinir"
				onPress={verificandoPreenchimento}
			/>
			<IconeFolha />
		</Container>
	);
}

export default RedefinirSenha;
