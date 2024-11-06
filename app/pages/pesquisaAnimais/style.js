import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContentView = styled.View`
	flex: 1;
	justify-content: center;
	gap: 20px;
	align-items: center;
	padding-bottom: 60px;
`;

export const ContentCards = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const TextoTitulo = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: center;
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	max-width: 80%;
	text-transform: uppercase;
`;
export const CardAnimal = styled.TouchableOpacity`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
	height: 250px;
	width: 45%;
	border-radius: 5px;
	border: 1.5px solid #00524b;
	margin: 15px 5px;
`;

export const CardImagemAnimal = styled.View`
	display: flex;
	height: 60%;
	width: 100%;
	border-radius: 5px;
`;
export const ImagemAnimal = styled.Image`
	height: 100%;
	width: 100%;
`;

export const TextCard = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	text-align: center;
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	max-width: 80%;
	text-transform: uppercase;
`;

export const ButtonVerMais = styled.TouchableOpacity`
	padding: 10px 20px;
	background-color: ${(props) => props.theme.colors.bgButton};
	border-radius: 5px;
	align-items: center;
`;

export const TextoBotao = styled.Text`
	color: #fff;
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
	color: ${(props) => props.theme.colors.textButton};
`;
