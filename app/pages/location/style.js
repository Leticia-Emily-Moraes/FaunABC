import styled from "styled-components/native";
import MapView from "react-native-maps";

export const Container = styled.View`
	width: 100%;
	height: 100%;
	padding: 30px 10px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerPrincipal = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
	align-items: center;
	padding-bottom: 50px;
`;

export const ContentMapa = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border: 2.5px solid ${(props) => props.theme.colors.iconThemeColor};
	border-radius: 10px;
	padding: 5px;
`;

export const StyledMap = styled(MapView)`
	flex: 1;
	border-radius: 10px;
`;
