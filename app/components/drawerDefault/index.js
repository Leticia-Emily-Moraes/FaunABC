import React from "react";
import { Container, Item, ItemText } from "./style";

function CustomDrawerContent(props) {
	return (
		<Container>
			<Item onPress={() => props.navigation.navigate("Home")}>
				<ItemText>Home</ItemText>
			</Item>
			<Item onPress={() => props.navigation.navigate("Telefones Offline")}>
				<ItemText>Telefones Offline</ItemText>
			</Item>
		</Container>
	);
}

export default CustomDrawerContent;
