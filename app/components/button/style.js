import styled from "styled-components/native";

export const ButtonPrincipal = styled.TouchableOpacity`
	display: flex;
	width: ${(props) => (props.isFull === true ? "80%" : "auto")};
	height: 30px;
	padding: 3px 22px;
	justify-content: center;
	align-items: center;
	gap: 10.4px;
	border-radius: 15px;
	background-color: ${(props) => props.theme.colors.bgButton};
`;

export const ButtonText = styled.Text`
	color: ${(props) => props.theme.colors.textButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoMenor};
`;
