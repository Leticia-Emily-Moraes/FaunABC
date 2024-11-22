import React, { useRef, useEffect, useState } from "react";
import {
	AccordionContainer,
	ButtonAccordion,
	ButtonContainer,
	TextButton,
	TextContainer,
	Container,
	TextoTitulo,
} from "./style";
import { Animated, Easing } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";

function AccordionOnline({
	title,
	height,
	localSocorro,
	naoFazer,
	deveFazer,
	sintomas,
}) {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [icon, setIcon] = useState("keyboard-arrow-down");
	const animatedHeight = useRef(new Animated.Value(0)).current;

	const handlePress = () => {
		setIsOpen((prev) => !prev);
		if (icon == "keyboard-arrow-down") {
			setIcon("keyboard-arrow-up");
		} else {
			setIcon("keyboard-arrow-down");
		}
	};

	useEffect(() => {
		Animated.timing(animatedHeight, {
			toValue: isOpen ? height : 0,
			duration: 50,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start();
	}, [isOpen]);

	return (
		<Container>
			<ButtonAccordion onPress={handlePress}>
				<ButtonContainer>
					<TextButton>{title}</TextButton>
					<MaterialIcons
						name={icon}
						size={40}
						color={theme.colors.textAccordionButton}
					/>
				</ButtonContainer>
			</ButtonAccordion>
			<AccordionContainer style={{ height: animatedHeight }}>
				<TextoTitulo>Local próximo especializado:</TextoTitulo>
				<TextContainer>{localSocorro}</TextContainer>
				<TextoTitulo>O que não fazer:</TextoTitulo>
				<TextContainer>{naoFazer}</TextContainer>
				<TextoTitulo>O que deve fazer:</TextoTitulo>
				<TextContainer>{deveFazer}</TextContainer>
				<TextoTitulo>Sintomas:</TextoTitulo>
				<TextContainer>{sintomas}</TextContainer>
			</AccordionContainer>
		</Container>
	);
}

export default AccordionOnline;
