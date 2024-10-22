import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const ContainerScroll = styled(ScrollView)`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.bg};
`;

export const Container = styled.View`
	width: 100%;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerComDoisBlocos = styled.View`
	gap: 15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.bg};
`;
