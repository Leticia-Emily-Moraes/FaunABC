import React, { useState } from "react";
import {
	Container,
	ContainerImagem,
	ContainerText,
	TituloDescricao,
	TextoDescricao,
	Imagem,
	ButtonContainer,
	ContainerView,
} from "./style";
import { useTheme } from "../../context/themeContext";

function CardChat({ nome, imagemUser, tipo, onPress}) {
	const { theme } = useTheme();

	return (
		<Container>
			<ButtonContainer onPress={onPress} disabled={tipo === "Encerrados" && false}>
				<ContainerView>
					<ContainerImagem>
						<Imagem
							source={imagemUser}
							resizeMode="cover"
						/>
					</ContainerImagem>
					<ContainerText>
						<TituloDescricao>{nome}</TituloDescricao>
						<TextoDescricao>
							{tipo === "Ativos"
								? "Entrar na Conversa"
								: tipo === "Disponiveis"
								? "Disponível para vínculo"
								: tipo === "Encerrados"
								? "Vínculo Encerrado"
								: "Status Desconhecido"}
						</TextoDescricao>
					</ContainerText>
				</ContainerView>
			</ButtonContainer>
		</Container>
	);
}

export default CardChat;
