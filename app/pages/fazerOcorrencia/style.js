import styled from "styled-components";
import { ScrollView } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 20px 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ViewContent = styled.View`
	padding: 10px 5px 40px 5px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const ContainerTitulo = styled.View`
	background-color: ${(props) => props.theme.colors.bgButton};
	width: 90%;
	height: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

export const TextoTitulo = styled.Text`
	color: ${(props) => props.theme.colors.textButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	text-transform: uppercase;
	width: 90%;
	text-align: center;
`;

export const Label = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	align-self: center;
`;

export const PickerWrapper = styled.View`
	background-color: ${(props) => props.theme.colors.bgInput};
	width: 75%;
	padding: 5px 25px;
	border-radius: 20px;
	color: ${(props) => props.theme.colors.text};
`;
