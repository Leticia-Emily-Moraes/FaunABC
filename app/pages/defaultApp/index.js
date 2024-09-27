import React from "react";
import { Container } from "./style";
import { NavSuperior, NavPrincipal } from "../../components";
import "react-native-gesture-handler";

function Default() {
	return (
		<Container>
			<NavSuperior />
			<NavPrincipal />
		</Container>
	);
}

export default Default;
