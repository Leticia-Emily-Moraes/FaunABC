import styled from "styled-components";
import {ScrollView} from "react-native";

export const Container = styled(ScrollView)`
    margin-top: 20px;
    display: flex;
    width: 100%;
    padding: 10px 15px 0px 15px;
    flex-direction: column;
    gap: 15px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const ContainerTop = styled.View`
    flex-direction: row;
    height: 58px;
    align-items: center;
    gap: 10px;
`;

export const ContainerAvatarFoto = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    flex-shrink: 0;
`;

export const Text16 = styled.Text`
	font-family: "Inter-Bold";
    size: 16px;
	font-size: ${(props) => props.theme.fontsSize.textoSemiGrande};
	color: ${(props) => props.theme.colors.textAccordionButton};
`;
