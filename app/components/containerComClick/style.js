import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";

export const Principal = styled.View`
	box-sizing: border-box;
	width: ${(props) => props.largura};
	height: ${(props) => props.altura};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	margin: 0px 0px 45px 0px;
`;

export const ButtonWrapper = styled.View`
    width: 100%;
    height: 100%;
	background-color: #00524b;
	border-radius: 10px;
`;

export const ButtonContainer = styled(TouchableWithoutFeedback)`
`;

export const TextTitulo = styled.Text`
	color: #00524b;
	font-family: "Inter-Bold";
	text-transform: uppercase;
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
`;
