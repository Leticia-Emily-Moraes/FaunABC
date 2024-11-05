import React from "react";
import {
	Container,
	DivPerfilStyle,
	InnerContainer,
	Text16Claro,
	Text16Escuro,
} from "./style";
import { Avatar } from "../../components";
import { Bandeirinha } from "../../components";
import { ContainerTop } from "./style";
import { ContainerAvatarFoto } from "./style";
import { Text16 } from "./style";
import { TextoGrande } from "../escolhaPerfil/style";
import { Div2, ButtonInterno } from "./style";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { TextEscuro } from "../perfilOng/style";

function PerfilOng({ navigation }) {
	return (
		<Container>
			<ButtonInterno onPress={() => navigation.navigate("DefaultGeral")}>
				<AntDesign
					name="arrowleft"
					size={30}
					color="black"
				/>
			</ButtonInterno>
			<InnerContainer>
				<ContainerTop></ContainerTop>
				<ContainerAvatarFoto
					onPress={() => console.log("TouchableOpacity funcionou!")}
				>
					<Avatar />
				</ContainerAvatarFoto>
				<Text16>Nome do usuário</Text16>
				<DivPerfilStyle>
					<Text16Claro>@Nome do usuário</Text16Claro>
				</DivPerfilStyle>
				<TextoGrande>XX Ocorrências registradas</TextoGrande>
				<Div2>
					<TextoGrande>Ong</TextoGrande>
					<MaterialIcons
						name="groups"
						size={28}
						color="black"
					/>
				</Div2>
				<Text16Escuro>Localização:</Text16Escuro>
				<Text16Escuro>Fundado em:</Text16Escuro>
			</InnerContainer>
		</Container>
	);
}

export default PerfilOng;
