import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerPrincipal = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	padding-bottom: 50px;
`;

export const ContainerButtons = styled.View`
	width: 80%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	gap: 50px;
`;

export const ContentViewAlertas = styled.View`
	flex: 1;
	display: ${(props) => (props.isAlertas ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
`;

export const ContentViewAjudasRapidas = styled.View`
	flex: 1;
	display: ${(props) => (props.isAlertas ? "none" : "flex")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const AlertContainer = styled.View`
	margin-bottom: 15px;
	padding: 10px;
	border-width: 1px;
	border-color: #ccc;
	border-radius: 5px;
`;

export const AlertTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;
