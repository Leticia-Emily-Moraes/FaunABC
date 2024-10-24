import styled from "styled-components/native";

export const Container = styled.View`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	padding: 0px 10px;
`;

export const Label = styled.Text`
	color: ${(props) => props.theme.colors.text};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.textoNormal};
	align-self: flex-start;
`;

export const PickerWrapper = styled.View`
	background-color: ${(props) => props.theme.colors.bgInput};
	width: 100%;
	padding: 5px 25px;
	border-radius: 20px;
	color: ${(props) => props.theme.colors.text};
`;