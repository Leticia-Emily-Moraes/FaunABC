import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 10px;
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
	position: static;
`;

export const ContentView = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
	align-items: center;
	position: static;
`;

export const ContainerButtons = styled.View`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
`;

export const TextoAlerta = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: center;
	font-size: ${(props) => props.theme.fontsSize.textoSemiGrande};
	max-width: 80%;
`;
