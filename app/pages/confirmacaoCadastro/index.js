import React, { useContext, useState, useEffect } from "react";
import { Container, ContainerText, TextoNormal, TextoTitulo } from "./style";
import { Button, LogoPadrao, IconeFolha } from "../../components";
import { PerfilContext } from "../../context/perfilContext";

const ConfirmacaoDeCadastro = ({ navigation }) => {
	const { perfil } = useContext(PerfilContext);
	const [subtitulo, setSubtitulo] = useState("");

	useEffect(() => {
		if (perfil === 1) {
			setSubtitulo(
				"Faça o login para aproveitar o máximo da nossa plataforma"
			);
		} else if (perfil === 2 || perfil === 3) {
			setSubtitulo(
				"Período para análise: 7 dias, assim que analisado receberá um e-mail."
			);
		}
	}, [perfil]);
	return (
		<Container>
			<LogoPadrao />
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
