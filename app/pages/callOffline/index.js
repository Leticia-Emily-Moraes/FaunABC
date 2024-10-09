import React from "react";
import { Container, ContentView, ContainerText, TextoTitulo } from "./style";
import { CardOrgaos, IconeFolha } from "../../components";
import { NumsEmergenciaData } from "../../data/numEmergencia";
import "react-native-gesture-handler";

function TelefonesOffline() {
	return (
		<Container>
			<ContentView>
				<ContainerText>
					<TextoTitulo>Número de Emergência</TextoTitulo>
				</ContainerText>
				{NumsEmergenciaData.map((orgao) => (
					<>
						<CardOrgaos
							orgao={orgao.orgao}
							regiao={orgao.regiao}
							telefone={orgao.telefone}
							imagem={orgao.imagem}
						/>
						<IconeFolha></IconeFolha>
					</>
				))}
			</ContentView>
		</Container>
	);
}

export default TelefonesOffline;
