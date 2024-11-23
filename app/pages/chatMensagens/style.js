import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Container = styled.View`
	width: 100%;
	height: 100%;
	padding: 30px 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerPrincipal = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	padding-bottom: 50px;
`;

export const ContentChat = styled.View`
	height: 105px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
	padding: 5px;
	border-bottom-width: 5px;
	border-bottom-color: ${(props) => props.theme.colors.iconThemeColor};
`;

export const ContainerView = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	padding: 10px;
`;

export const ContainerImagem = styled.View`
	width: 20%;
	height: 100%;
	border-radius: 100px;
`;

export const Imagem = styled.Image`
	width: 100%;
	height: 100%;
	border-radius: 100px;
	border: 3px solid ${(props) => props.theme.colors.iconThemeColor};
`;

export const ContainerText = styled.View`
	width: 75%;
	height: 100%;
	padding: 10px 15px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const TituloDescricao = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: left;
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	flex-shrink: 0;
`;

export const ContainerMensagem = styled(ScrollView)`
	width: 100%;
  `;

export const ContentMensagem = styled.View`
	width: 100%;
	height: 670px;
	display: flex;
	flex-direction: column;
	border: 2.5px solid ${(props) => props.theme.colors.iconThemeColor};
	padding: 10px;
	border-radius: 10px;
	align-items: end;
`;

export const Input = styled.TextInput`
	background-color: ${(props) => props.theme.colors.bgInput};
	width: 85%;
	height: 100%;
	padding: 5px 25px;
	border-radius: 20px;
	color: ${(props) => props.theme.colors.text};
`;

export const ContainerEscrever = styled.View`
	width: 100%;
	height: 45px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ButtonPrincipal = styled.TouchableOpacity`
	display: flex;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) =>
		props.isActive
			? props.theme.colors.bgButtonActive
			: props.theme.colors.bgButton};
`;
