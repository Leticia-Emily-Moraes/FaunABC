import React from "react";
import {
	ContainerUp,
	BotaoPerfilUser,
	MenuButton,
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
	return (
		<ContainerUp>
			<MenuButton onPress={() => navigation.openDrawer()}>
				<SimpleLineIcons
					name="menu"
					size={40}
					color={theme.colors.iconThemeColor}
				/>
			</MenuButton>
			<InputSimples>
				<AntDesign
					name="search1"
					size={25}
					color="#537552"
				/>
			</InputSimples>
			<BotaoPerfilUser>
				<MaterialCommunityIcons
					name="account-circle-outline"
					size={40}
					color={theme.colors.iconThemeColor}
				/>
			</BotaoPerfilUser>
		</ContainerUp>
	);
}

export default NavSuperior;
