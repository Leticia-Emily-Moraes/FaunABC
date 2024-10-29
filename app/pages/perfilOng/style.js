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
export const InnerContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    gap: 15px;
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
	font-size: 16px;
	color: ${(props) => props.theme.colors.textAccordionButton};
`;
export const Text16Claro = styled.Text`
	font-family: "Inter-Bold";
	font-size: 16px;
	color: #BAD9A2;
`;

export const Text16Escuro = styled.Text`
	font-family: "Inter-Bold";
	font-size: 16px;
    border-radius: 10px;
    color:#BAD9A2;
    width: 126px;
    text-align: center;
	background-color: ${(props) => 
	props.isActive ? props.theme.colors.bgButtonActive : props.theme.colors.bgButton};
`;

export const DivPerfilStyle = styled.TouchableOpacity `
    display: flex;
    width: 190px;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background-color: ${(props) => 
	props.isActive ? props.theme.colors.bgButtonActive : props.theme.colors.bgButton};
    border-radius: 10px;
    margin-top: 15px;
`;

export const TextEscuro = styled.Text `
    color: #00524B;
    font-family: "Inter-Bold";
    font-size: 5px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const Div2 = styled.View `
    width: 250px;
    height: 46px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    flex-direction: row;
`;
