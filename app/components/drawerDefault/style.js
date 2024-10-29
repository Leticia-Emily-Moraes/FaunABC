import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const Item = styled.TouchableOpacity`
	display: flex;
	width: 80%;
	padding: 5px 25px;
	margin: 15px 0px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) => props.theme.colors.bgButton};
`;

export const ItemText = styled.Text`
	color: ${(props) => props.theme.colors.textButton};
	font-family: "Inter-Bold";
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
`;
