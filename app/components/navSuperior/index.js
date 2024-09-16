import React from "react";
import { ContainerUp, BotaoPerfilUser, MenuButton } from "./style";
import { InputSimples } from "../InputSimples/style";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

function NavSuperior() {
	return (
		<ContainerUp>
			<BotaoPerfilUser>
				<FontAwesome
					name="user-circle-o"
					size={24}
					color="#537552"
				/>
			</BotaoPerfilUser>
			<InputSimples>
				<AntDesign
					name="search1"
					size={25}
					color="#537552"
				/>
			</InputSimples>
			<MenuButton>
				<Ionicons
					name="menu"
					size={24}
					color="#537552"
				/>
			</MenuButton>
		</ContainerUp>
	);
}

export default NavSuperior;
