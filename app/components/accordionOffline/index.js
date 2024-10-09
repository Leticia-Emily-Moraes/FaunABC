import React, { useRef, useEffect, useState } from "react";
import {
	AccordionContainer,
	ButtonAccordion,
	ButtonContainer,
	TextButton,
	TextContainer,
} from "./style";
import { Animated, Easing } from "react-native";

function AccordionOffline({ title, textAccordion }) {
	const [isOpen, setIsOpen] = useState(false);
	const animatedHeight = useRef(new Animated.Value(0)).current;

	const handlePress = () => {
		setIsOpen((prev) => !prev);
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
		<>
			<ButtonAccordion onPress={handlePress}>
				<ButtonContainer>
					<TextButton>{title}</TextButton>
				</ButtonContainer>
			</ButtonAccordion>
			<AccordionContainer style={{ height: animatedHeight }}>
				<TextContainer>{textAccordion}</TextContainer>
			</AccordionContainer>
		</>
	);
}

export default AccordionOffline;
