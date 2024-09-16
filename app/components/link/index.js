import React from "react";
import { LinkContainer, LinkText } from "./style";

function Link({ title, onPress, fontSize = 16 }) {
	return (
		<LinkContainer onPress={onPress}>
			<LinkText fontSize={fontSize}>{title}</LinkText>
		</LinkContainer>
	);
}

export default Link;
