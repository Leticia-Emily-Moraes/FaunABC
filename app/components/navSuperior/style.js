import styled from "styled-components/native";

export const Container = styled.View`
	display: flex;
	height: 50px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
	padding: 30px 15px;
`;

export const ButtonInterno = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	justify-self: ${(props) => (props.alignSelf ? props.alignSelf : 'auto')};
`;

export const ContainerInput = styled.View`
	width: 275px;
	height: 49px;
	display: flex;
	height: 50px;
	align-items: center;
	flex-direction: row;
	justify-content: flex-start;
	border-radius: 10px;
	background: #537552;
`;

export const MenuButton = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
`;

export const InputSimples = styled.TextInput`
	width: 225px;
	height: 50px;
	border-radius: 20px;
	color: ${(props) => props.theme.colors.textButton};
	font-size: ${(props) => props.theme.fontsSize.TextoPequeno};
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
