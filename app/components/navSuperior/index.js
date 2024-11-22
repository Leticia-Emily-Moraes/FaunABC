import React, { useState } from "react";
import {
	Container,
	ButtonInterno,
	ContainerInput,
	InputSimples,
} from "./style";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { useTheme } from "../../context/themeContext";
import { useNavigation } from "@react-navigation/native";

function NavSuperior() {
	const { theme } = useTheme();
	const navigation = useNavigation();
	const [inputText, setInputText] = useState("");

	const handleBuscar = () => {
		navigation.navigate("PesquisaAnimais", { searchText: inputText });
	};

	return (
		<Container>
			<ButtonInterno onPress={() => navigation.openDrawer()}>
				<SimpleLineIcons
					name="menu"
					size={40}
					color={theme.colors.iconThemeColor}
				/>
			</ButtonInterno>
			<ContainerInput>
				<ButtonInterno
					onPress={() => {
						if (inputText === "") {
							navigation.navigate("PesquisaAnimais");
						} else {
							handleBuscar();
						}
					}}
				>
					<AntDesign
						name="search1"
						size={30}
						color="#BAD9A2"
					/>
				</ButtonInterno>
				<InputSimples
					value={inputText}
					onPress={() => navigation.navigate("PesquisaAnimais")}
					onChangeText={(text) => setInputText(text)}
					onSubmitEditing={handleBuscar}
					placeholder="Buscar"
					placeholderTextColor="#BAD9A2"
				/>
				{/* <ButtonInterno>
					<Ionicons
						name="camera-outline"
						size={30}
						color="#BAD9A2"
					/>
				</ButtonInterno> */}
				{/* <ButtonInterno>
					<MaterialCommunityIcons
						name="microphone-outline"
						size={30}
						color="#BAD9A2"
					/>
				</ButtonInterno> */}
			</ContainerInput>
			<ButtonInterno onPress={() => navigation.navigate("Perfil")}>
				<MaterialCommunityIcons
					name="account-circle-outline"
					size={40}
					color={theme.colors.iconThemeColor}
				/>
			</ButtonInterno>
		</Container>
	);
}

export default NavSuperior;
