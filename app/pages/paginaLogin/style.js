import styled from "styled-components/native";

export const Container = styled.View`
	height: 100%;
	width: 100%;
	padding: 50px 10px;
	background-color: ${(props) => props.theme.colors.bg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

export const ContainerEntrarCom = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 80%;
`;

export const ContainerButtonsEntrarCom = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 25px;
	width: 100%;
`;

export const TextoNormal = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
`;

export const TextoTitulo = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoTitulo};
`;

export const TextError = styled.Text`
	color: red;
	font-family: "Inter-Regular";
	font-size: ${(props) => props.theme.fontsSize.textoMenor};
`;
