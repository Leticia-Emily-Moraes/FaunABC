import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 50px 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContentView = styled.View`
	flex: 1;
	justify-content: center;
	gap: 20px;
	align-items: center;
	padding-bottom: 60px;
`;

export const ContainerText = styled.Text`
    background-color: ${(props) => props.theme.colors.bgTitulo};
    width: 90%;
	padding: 5px 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 5px;
`;
export const TextoTitulo = styled.Text`
    color: ${(props) => props.theme.colors.textTitulo};
    font-family: "Inter-Bold";
    text-align: center;
    font-size: ${(props) => props.theme.fontsSize.textoTitulo};
    max-width: 80%;
`;