import styled from "styled-components/native";

export const ContainerRButton = styled.View`
	width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const RadioButtonText = styled.Text`
	color: ${(props) => props.theme.colors.textRadioButton};
	font-family: "Inter-Bold";
	font-size: 16px;
`;

export const RadioButton = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
    justify-content: flex-start;
	align-items: center;
	width: 80%;
	height: 60px;
	padding: 10px 50px;
	gap: 20px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.bgRadioButton};
`;

export const RadioBg = styled.View`
	width: 20px;
	height: 20px;
	border-radius: 90px;
	background-color: ${(props) => props.theme.colors.selected};
`;
