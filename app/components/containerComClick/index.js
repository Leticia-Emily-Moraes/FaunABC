import React from "react";
import { Principal, ButtonWrapper, ButtonContainer, TextTitulo } from "./style";
import { View } from "react-native";

function ContainerComClick({ altura, largura, titulo, navigate }) {
	return (
		<Principal altura={altura} largura={largura}>
			<TextTitulo>{titulo}</TextTitulo>
			<ButtonWrapper>
				<ButtonContainer onPress={navigate}>
					<View />
				</ButtonContainer>
			</ButtonWrapper>
		</Principal>
	);
}

export default ContainerComClick;
