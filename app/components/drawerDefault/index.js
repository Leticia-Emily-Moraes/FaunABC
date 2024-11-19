import React from "react";
import { Container, Item, ItemText } from "./style";
import { ToggleTheme } from "../index";

function CustomDrawerContent(props) {
	return (
		<Container>
			<ToggleTheme></ToggleTheme>
			<Item>
				<ItemText>Sobre nós</ItemText>
			</Item>
			<Item>
				<ItemText>Salvos</ItemText>
			</Item>
			<Item>
				<ItemText>Desconectar conta</ItemText>
			</Item>
			{/* <Item>
				<ItemText>Mudar para conta profissional/comum</ItemText>
			</Item> */}
			{/* <Item>
				<ItemText>Ver tutorial</ItemText>
			</Item> */}
		</Container>
	);
}

export default CustomDrawerContent;
