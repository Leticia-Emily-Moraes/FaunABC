import React, { useState } from "react";
import {
	Container,
	ContainerMenor,
	TextoNormal,
	TextoTitulo,
	TextoMenosEnface,
	TextError,
} from "./style";
import Button from "../../components/button";
import Logo from "../../components/logoPadrao";
import IconeFolha from "../../components/iconFolha";

import InputNumero from "../../components/inputNumero";
import Link from "../../components/link";

const VerificacaoDuasEtapas = ({ navigation, route }) => {
	const { email, isPasswordReset } = route.params;
	const [codigo, setCodigo] = useState("");
	const [isEmail, setIsEmail] = useState(true);
	const [mensagemErro, setMensagemErro] = useState("");

	// const handleToggleType = () => {
	// 	setIsEmail(prevIsEmail => !prevIsEmail);
	// };

	const handleVerification = () => {
		if (codigo.length === 0) {
			setMensagemErro("Por favor, insira o código de verificação.");
			return;
		} else {
			if (isPasswordReset) {
				navigation.navigate(" ");
			} else {
				navigation.navigate("PaginaPrincipal");
			}
		}
	};

	return (
		<Container>
			<TextoTitulo>Verificação em duas etapas</TextoTitulo>
			<Logo size={125} />
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
