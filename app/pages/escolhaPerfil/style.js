import styled from "styled-components/native";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	padding: 25px 10px;
	background-color: ${(props) => props.theme.colors.bg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;

export const ContainerButton = styled.View`
	height: 20px;
	width: 100%;
	justify-content: center;
	align-content: center;
`;

export const TextoNormal = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	text-align: center;
`;

export const TextoGrande = styled.Text`
	text-align: center;
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoTitulo};
`;

export const ContainerEscolhaTipo = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 300px;
`;
