import styled from "styled-components/native";
import { TouchableWithoutFeedback, Animated } from "react-native";

export const ButtonAccordion = styled(TouchableWithoutFeedback)``;

export const ButtonContainer = styled.View`
	width: 80%;
	height: 50px;
	background-color: ${(props) => props.theme.colors.bgAccordionButton};
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin: 0;
`;

export const TextButton = styled.Text`
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoSemiGrande};
	color: ${(props) => props.theme.colors.textAccordionButton};
`;
export const AccordionContainer = styled(Animated.View)`
	box-sizing: border-box;
	display: flex;
	position: relative;
	top: -50px;
	z-index: -1;
	width: 80%;
	padding: -5px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.bgAccordionContainer};
	overflow: hidden;
`;

export const TextContainer = styled.Text`
	font-family: "Inter-SemiBold";
	text-align: justify;
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	color: ${(props) => props.theme.colors.textAccordionContainer};
`;
