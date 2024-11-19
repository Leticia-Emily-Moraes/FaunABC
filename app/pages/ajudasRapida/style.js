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

export const ContentViewAjudasRapidas = styled.View`
	flex: 1;
	display: ${(props) => (props.isAlertas === true ? "none" : "flex")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	position: static;
`;

export const ContentViewAlertas = styled.View`
	flex: 1;
	display:  ${(props) => (props.isAlertas === true ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
`;

export const ContainerButtons = styled.View`
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	gap: 50px;
`;


export const ContainerCard = styled.View`
	width: 90%;
	height: 200px;
	border-radius: 10px;
	border: 1px solid ${(props) => props.theme.colors.iconThemeColor};
	display: flex;
	flex-direction: row;
	overflow: visible;
`;

export const ContainerImagemCard = styled.View`
	width: 30%;
	height: 100%;
`;

export const ImagemCard = styled.Image`
	width: 100%;
	height: 100%;
`;
export const ContainerTextCard = styled.View`
	width: 70%;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const ContainerDescricaoCard = styled.View`
	width: 70%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const TituloDescricao = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: left;
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	flex-shrink: 0;
`;

export const TextoDescricao = styled.Text`
	color: ${(props) => props.theme.colors.bgButton};
	font-family: "Inter-Bold";
	text-align: left;
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	flex-wrap: wrap; 
	word-wrap: break-word;
	flex-grow: 1; 
`;

export const TextoAlerta= styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: center;
	font-size: ${(props) => props.theme.fontsSize.textoSemiGrande};
	max-width: 80%;
`;
