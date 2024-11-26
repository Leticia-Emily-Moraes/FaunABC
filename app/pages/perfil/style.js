import styled from "styled-components";
import { ScrollView } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 40px 20px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ViewContent = styled.View`
	padding: 10px 5px 40px 5px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
`;

export const ContainerImagem = styled.Image`
	width: 150px;
	height: 150px;
	border-radius: 150px;
`;

export const ViewText = styled.View`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
`;

export const TextoAuxiliar = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	width: 90%;
	text-align: center;
`;

export const TextPrincipal = styled.Text`
	color: ${(props) => props.theme.colors.bgButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	align-self: center;
`;
