import React from "react";
import { ButtonInterno } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";
import { useNavigation } from "@react-navigation/native";

function ButtonGoBack() {
	const navigation = useNavigation();
	const { theme } = useTheme();
	return (
		<ButtonInterno
			onPress={() => navigation.goBack()}
		>
			<AntDesign
				name="arrowleft"
				size={40}
				color={theme.colors.textButton}
			/>
		</ButtonInterno>
	);
}

export default ButtonGoBack;
