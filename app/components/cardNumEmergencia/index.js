import React from "react";
import {
	Container,
	ContainerImagem,
	ContainerText,
	TituloDescricao,
	TextoDescricao,
	ContainerDescricao,
	Imagem,
} from "./style";

function CardOrgaos({ orgao, regiao, telefone, imagem }) {
	return (
		<Container>
			<ContainerImagem>
				<Imagem
					source={imagem}
					resizeMode="cover"
				/>
			</ContainerImagem>
			<ContainerText>
				<ContainerDescricao>
					<TituloDescricao>Orgão: </TituloDescricao>
					<TextoDescricao>{orgao}</TextoDescricao>
				</ContainerDescricao>
				<ContainerDescricao>
					<TituloDescricao>Região: </TituloDescricao>
					<TextoDescricao>{regiao}</TextoDescricao>
				</ContainerDescricao>
				<ContainerDescricao>
					<TituloDescricao>Telefone: </TituloDescricao>
					<TextoDescricao>{telefone}</TextoDescricao>
				</ContainerDescricao>
			</ContainerText>
		</Container>
	);
}

export default CardOrgaos;
