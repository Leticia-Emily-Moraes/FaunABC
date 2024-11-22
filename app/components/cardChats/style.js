import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	height: 95px;
	border-radius: 10px;
	border: 1px solid ${(props) => props.theme.colors.iconThemeColor};
	display: flex;
	flex-direction: row;
	overflow: visible;
`;

export const ButtonContainer = styled.TouchableHighlight`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
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

export const TextoDescricao = styled.Text`
	color: ${(props) => props.theme.colors.bgButton};
	font-family: "Inter-Bold";
	text-align: left;
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	flex-wrap: wrap;
	word-wrap: break-word;
	flex-grow: 1;
`;
