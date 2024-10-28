import React from "react";
import { Container, Item, ItemText } from "./style";

function CustomDrawerContent(props) {
	return (
		<Container>
			<Item>
				<ItemText>Sobre nós</ItemText>
			</Item>
			<Item>
				<ItemText>Salvos</ItemText>
			</Item>
			<Item>
				<ItemText>Tema</ItemText>
			</Item>
			<Item>
				<ItemText>Desconectar conta</ItemText>
			</Item>
			<Item>
				<ItemText>Mudar para conta profissional/comum</ItemText>
			</Item>
			<Item>
				<ItemText>Ver tutorial</ItemText>
			</Item>
		</Container>
	);
}

export default CustomDrawerContent;
