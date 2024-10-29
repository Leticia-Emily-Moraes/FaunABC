import styled from "styled-components";

export const Container = styled.View`
        margin-top: 20px;
        display: flex;
        width: 100%;
        height:100%;
        padding: 10px 15px 0px 15px;
        flex-direction: column;
        gap: 15px;
        background-color: ${(props) => props.theme.colors.bg};
`;

export const Text16 = styled.Text`
	font-family: "Inter-Bold";
	font-size: 16px;
	color: #F5BD63;
`;

export const  Button = styled.TouchableOpacity`
    display: flex;
	width: ${(props) => (props.isFull === true ? "80%" : "auto")};
    height:40px;
	padding: 3px 22px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) => 
	props.isActive ? props.theme.colors.bgButtonActive : props.theme.colors.bgButton};
`;