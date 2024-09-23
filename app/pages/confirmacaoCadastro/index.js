import React, { useContext, useState, useEffect } from "react";
import { Container, ContainerText, TextoNormal, TextoTitulo } from "./style";
import Button from "../../components/button";
import Logo from "../../components/logoPadrao";
import IconeFolha from "../../components/iconFolha";

import { PerfilContext } from "../../context/perfilContext";

const ConfirmacaoDeCadastro = ({ navigation }) => {
	const { perfil } = useContext(PerfilContext);
	const [subtitulo, setSubtitulo] = useState("");

	useEffect(() => {
		if (perfil === "1") {
			setSubtitulo(
				"Faça o login para aproveitar o máximo da nossa plataforma"
			);
		} else if (perfil === "2" || perfil === "3") {
			setSubtitulo(
				"Período para análise: 7 dias, assim que analisado receberá um e-mail."
			);
		}
	}, [perfil]);
	return (
		<Container>
			<Logo />
			<ContainerText>
				<TextoTitulo>Dados cadastrados com Sucesso!</TextoTitulo>
				<TextoNormal>{subtitulo}</TextoNormal>
			</ContainerText>
			<Button
				title="Ir para login"
				onPress={() => navigation.navigate("Login")}
			/>
			<IconeFolha />
		</Container>
	);
};

export default ConfirmacaoDeCadastro;
