import React from "react";
import { Container, ContentView, TextoTitulo } from "./style";
import { CardOrgaos, IconeFolha } from "../../components";
import { NumsEmergenciaData } from "../../data/numEmergencia";
import "react-native-gesture-handler";

function TelefonesDeEmergencia() {
	return (
		<Container>
			<ContentView>
				<TextoTitulo>Número de Emergência</TextoTitulo>
				{NumsEmergenciaData.map((orgao) => (
					<React.Fragment key={orgao.id}>
						<CardOrgaos
							canISave={true}
							orgao={orgao.orgao}
							regiao={orgao.regiao}
							telefone={orgao.telefone}
							imagem={orgao.imagem}
						/>
						<IconeFolha />
					</React.Fragment>
				))}
			</ContentView>
		</Container>
	);
}

export default TelefonesDeEmergencia;
