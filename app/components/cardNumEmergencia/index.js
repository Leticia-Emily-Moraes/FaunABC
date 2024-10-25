import React, { useState } from "react";
import {
	Container,
	ContainerImagem,
	ContainerText,
	TituloDescricao,
	TextoDescricao,
	ContainerDescricao,
	ContainerIcon,
	Imagem,
	ButtonIcon
} from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";

function CardOrgaos({
	orgao,
	regiao,
	telefone,
	imagem,
	canISave = false,
	isSavedInitially = false,
}) {
	const [isSaved, setIsSaved] = useState(isSavedInitially);
	const { theme } = useTheme();
	const toggleSave = () => {
		setIsSaved((prev) => !prev);
	};

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
			{canISave && (
				<ContainerIcon>
					<ButtonIcon onPress={toggleSave}>
						<MaterialIcons
							name={isSaved ? "bookmark" : "bookmark-outline"}
							size={40}
							color={theme.colors.iconThemeColor}
						/>
					</ButtonIcon>
				</ContainerIcon>
			)}
		</Container>
	);
}

export default CardOrgaos;
