import styled from "styled-components/native";

export const ContainerUp = styled.View`
	display: flex;
	height: 50px;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	margin-top: 20px;
	padding: 30px;
`;

export const BotaoPerfilUser = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
`;

export const MenuButton = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
`;

export const InputSimples = styled.TextInput`
	width: 250px;
	height: 49px;
	border-radius: 10px;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.bgInput};
	margin-left: 25px;
	margin-right: 25px;
`;
export const ViewInput = styled.View`
	width: 250px;
	height: 49px;
	border-radius: 10px;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.bgInput};
	margin-left: 25px;
	margin-right: 25px;
`;
