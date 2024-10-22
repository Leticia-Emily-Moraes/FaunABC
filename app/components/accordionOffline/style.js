import styled from "styled-components/native";
import { TouchableWithoutFeedback, Animated } from "react-native";

export const Container = styled.View`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ButtonAccordion = styled(TouchableWithoutFeedback)``;

export const ButtonContainer = styled.View`
	width: 80%;
	height: 50px;
	background-color: ${(props) => props.theme.colors.bgAccordionButton};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 20px;
	align-items: center;
	border-radius: 20px;
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
	padding: 0px 10px;
	width: 80%;
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
