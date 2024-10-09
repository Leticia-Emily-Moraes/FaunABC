import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	height: 200px;
	border-radius: 10px;
	border: 1px solid ${(props) => props.theme.colors.iconThemeColor};
	display: flex;
	flex-direction: row;
	overflow: visible;
`;

export const ContainerImagem = styled.View`
	width: 40%;
	height: 100%;
`;

export const Imagem = styled.Image`
	width: 100%;
	height: 100%;
`;
export const ContainerText = styled.View`
	width: 60%;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const ContainerDescricao = styled.View`
	width: 60%;
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
