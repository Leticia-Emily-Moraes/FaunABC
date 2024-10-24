import styled from "styled-components/native";

export const ButtonPrincipal = styled.TouchableOpacity`
	display: flex;
	width: ${(props) => (props.isFull === true ? "80%" : "auto")};
	padding: 3px 22px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) => 
	props.isActive ? props.theme.colors.bgButtonActive : props.theme.colors.bgButton};
`;

export const ButtonText = styled.Text`
	color: ${(props) => 
	props.isActive ? props.theme.colors.textButtonActive : props.theme.colors.textButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
`;
