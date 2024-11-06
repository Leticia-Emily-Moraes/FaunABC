import React, { useEffect } from "react";
import {
	Container,
	ViewContent,
	TextoTitulo,
	ContainerTitulo,
	ButtonInterno,
	TextoNormal,
	ImagemAnimal,
	ContainerText,
	TextoCard,
} from "./style";
import { useTheme } from "../../context/themeContext";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Animal = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { theme } = useTheme();

	const animal = route.params?.animal;

	return (
		<Container>
			<ViewContent>
				<ContainerTitulo>
					<ButtonInterno onPress={() => navigation.goBack()}>
						<AntDesign
							name="arrowleft"
							size={40}
							color={theme.colors.textButton}
						/>
					</ButtonInterno>
					<TextoTitulo>{animal?.nomePopular}</TextoTitulo>
				</ContainerTitulo>
				<ViewContent>
					<ImagemAnimal
						source={animal.imagem}
						resizeMode="cover"
					></ImagemAnimal>
					<ContainerText>
						{animal.peconhento === "true" ? (
							<TextoCard>
								<Entypo
									name="check"
									size={20}
									color={theme.colors.bgRadioButton}
								/>{" "}
								Peçonhento
							</TextoCard>
						) : (
							<TextoCard>
								<Ionicons
									name="close-sharp"
									size={20}
									color={theme.colors.bgRadioButton}
								/>{" "}
								Não peçonhento
							</TextoCard>
						)}
					</ContainerText>
					<ContainerText>
						{animal.agressivo === "true" ? (
							<TextoCard>
								<Entypo
									name="check"
									size={20}
									color={theme.colors.bgRadioButton}
								/>{" "}
								Agressivo
							</TextoCard>
						) : (
							<TextoCard>
								<Ionicons
									name="close-sharp"
									size={20}
									color={theme.colors.bgRadioButton}
								/>{" "}
								Não agressivo
							</TextoCard>
						)}
					</ContainerText>
					<TextoNormal>Nome Comum:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.nomePopular}</TextoCard>
					</ContainerText>
					<TextoNormal>Nome Científico:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.nomeCientifico}</TextoCard>
					</ContainerText>
					<TextoNormal>Família:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.familia}</TextoCard>
					</ContainerText>
					<TextoNormal>Habitat:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.habitat}</TextoCard>
					</ContainerText>
					<TextoNormal>Hábito:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.habito}</TextoCard>
					</ContainerText>
					<TextoNormal>Características gerais:</TextoNormal>
					<ContainerText>
						<TextoCard>{animal?.caractGeral}</TextoCard>
					</ContainerText>
				</ViewContent>
			</ViewContent>
		</Container>
	);
};

export default Animal;
