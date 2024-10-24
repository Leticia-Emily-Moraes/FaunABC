import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

export const Container = styled(ScrollView)`
	width: 100%;
	height: 100%;
	padding: 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerPrincipal = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	padding-bottom: 50px;
	position: static;
`;

export const ContentViewAjudasRapidas = styled.View`
	flex: 1;
	display: ${(props) => (props.isAlertas === true ? "none" : "flex")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	position: static;
`;

export const ContentViewAlertas = styled.View`
	flex: 1;
	display:  ${(props) => (props.isAlertas === true ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
`;

export const ContainerButtons = styled.View`
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	gap: 50px;
`;
