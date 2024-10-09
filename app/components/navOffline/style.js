import styled from "styled-components/native";

export const Container = styled.View`
	display: flex;
	width: 100%;
	height: 50px;
	padding: 10px 15px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background-color: ${(props) => props.theme.colors.navColor};
`;

export const Button = styled.TouchableOpacity`
	height: 100%;
	align-items: center;
	justify-content: center;
`;