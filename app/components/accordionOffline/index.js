import React, { useRef, useEffect, useState } from "react";
import {
	AccordionContainer,
	ButtonAccordion,
	ButtonContainer,
	TextButton,
	TextContainer,
	Container,
} from "./style";
import { Animated, Easing } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";

function AccordionOffline({ title, textAccordion }) {
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [icon, setIcon] = useState("keyboard-arrow-down");
	const animatedHeight = useRef(new Animated.Value(0)).current;

	const handlePress = () => {
		setIsOpen((prev) => !prev);
		if(icon == "keyboard-arrow-down"){
			setIcon("keyboard-arrow-up");
		}else{
			setIcon("keyboard-arrow-down");
		}
		
	};

	useEffect(() => {
		Animated.timing(animatedHeight, {
			toValue: isOpen ? 700 : 0,
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
				<TextContainer>{textAccordion}</TextContainer>
			</AccordionContainer>
		</Container>
	);
}

export default AccordionOffline;
