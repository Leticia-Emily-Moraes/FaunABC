import React, { useState } from "react";
import {
	Container,
	ContainerMenor,
	TextoNormal,
	TextoTitulo,
	TextoMenosEnface,
	TextError,
} from "./style";

import {
	Button,
	LogoPadrao,
	IconeFolha,
	InputNumero,
	Link,
} from "../../components";

import { VerificaCodigo } from "../../service/api/apiVerificacaoDoCodigo";

const VerificacaoDuasEtapas = ({ navigation, route }) => {
	const { email, isPasswordReset } = route.params;
	const [codigo, setCodigo] = useState("");
	const [isEmail, setIsEmail] = useState(true);
	const [mensagemErro, setMensagemErro] = useState("");

	// const handleToggleType = () => {
	// 	setIsEmail(prevIsEmail => !prevIsEmail);
	// };

	const handleVerification = async () => {
		if (codigo.length === 0) {
			setMensagemErro("Por favor, insira o código de verificação.");
			return;
		}

		try {
			const resultado = await VerificaCodigo(email, codigo);

			if (resultado.message === "Verificação concluída com sucesso!") {
				if (isPasswordReset) {
					navigation.navigate("Login");
				} else {
					navigation.navigate("Default");
				}
			} else {
				setMensagemErro("Código de verificação incorreto");
			}
		} catch (error) {
			setMensagemErro("Erro ao verificar código. Tente novamente");
		}
	};

	return (
		<Container>
			<TextoTitulo>Verificação em duas etapas</TextoTitulo>
			<LogoPadrao size={125} />
			<ContainerMenor>
				<TextoNormal>
					Código de verificação enviado para:
					<TextoMenosEnface>
						{" "}
						{isEmail ? email : "Telefone"}
					</TextoMenosEnface>
				</TextoNormal>
				{/* <Link
					fontSize={12}
					title={isEmail ? "Usar o SMS" : "Usar o Email"}
					onPress={handleToggleType}
				/> */}
			</ContainerMenor>
			<ContainerMenor>
				<TextoTitulo>Digite o código</TextoTitulo>
				<InputNumero
					TituloDoInput=""
					placeholder="Digite o código"
					value={codigo}
					onChangeNumber={setCodigo}
				/>
				{mensagemErro && <TextError>{mensagemErro}</TextError>}
				<Link
					fontSize={12}
					title={
						isEmail
							? "Reenviar código para o Email"
							: "Reenviar código para o Telefone"
					}
				/>
			</ContainerMenor>
			<Button
				title="Verificar"
				onPress={handleVerification}
			/>
			<IconeFolha />
		</Container>
	);
};

export default VerificacaoDuasEtapas;
