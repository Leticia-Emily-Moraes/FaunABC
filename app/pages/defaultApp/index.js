import React from "react";
import { Container } from "./style";
import NavSuperior from "../../components/navSuperior";
import NavPrincipal from "../../components/navPrincipal";
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
