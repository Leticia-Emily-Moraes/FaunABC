import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const ViewScroll = styled(ScrollView)`
	width: 100%;
	height: 100%;
`;
export const ContainerPP = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerConteudo = styled.View`
	height: 100%;
	width: 100%;
	align-items: center;
`;

export const ContainerConteudo1 = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;
	align-items: center;
`;

export const ContainerConteudo2 = styled.View`
	width: 100%;
	height: 200%;
	align-items: center;
`;

export const ButtonConteudo = styled.TouchableOpacity`
	width: 157.5px;
	height: 150px;
	border-radius: 10px;
	background: #bad9a2;
`;

export const ButtonConteudoGrande = styled.TouchableOpacity`
	width: 330px;
	height: 150px;
	border-radius: 10px;
	background: #bad9a2;
	margin-top: 50px;
`;

export const TextoPequeno = styled.Text`
	color: #bad9a2;
	text-align: center;
	font-family: "Inter-Regular";
	font-size: 20px;
	text-transform: uppercase;
`;

export const Title = styled.Text`
	text-align: center;
	font-family: "Inter-Bold";
	font-size: 20px;
	text-transform: uppercase;
`;

export const Div = styled.View`
	width: 157.5px;
	height: 150px;
	border-radius: 10px;
`;
