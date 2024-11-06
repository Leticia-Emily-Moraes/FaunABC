import styled from "styled-components/native";
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
	align-items: center;
	padding: 20px 10px;
    gap: 20px;
`;

export const TextoTitulo = styled.Text`
	color: ${(props) => props.theme.colors.textButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	text-transform: uppercase;
    width: 90%;
`;

export const ButtonInterno = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextoNormal = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-family: "Inter-Bold";
    font-size: ${(props) => props.theme.fontsSize.textoNormal};
`;

export const TextoCard = styled.Text`
    color: ${(props) => props.theme.colors.textButtonActive};
    font-family: "Inter-Regular";
    font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
    text-align: center;
`;

export const ImagemAnimal = styled.Image`
	height: 300px;
	width: 90%;
	border: 10px solid ${(props) => props.theme.colors.navColor};
	border-radius: 10px;
`;

export const ContainerText = styled.View`
	background-color: ${(props) => props.theme.colors.bgInput};
	width: 90%;
	height: auto;
	border-radius: 10px;
	padding: 5px 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;



