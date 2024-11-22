import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	padding: 10px;
    width: 100%;
`;

export const MessageContainer = styled.View`
	flex-direction: ${(props) => (props.isSender ? "row-reverse" : "row")};
	margin-bottom: 10px;
`;

export const MessageBubble = styled.View`
	max-width: 70%;
	padding: 10px 15px;
	background-color: ${(props) =>
		props.isSender ? "#ffc76c" : "#009ddf"};
	border-radius: 15px;
	border-bottom-right-radius: ${(props) => (props.isSender ? "0px" : "15px")};
	border-bottom-left-radius: ${(props) => (props.isSender ? "15px" : "0px")};
`;

export const MessageText = styled.Text`
	font-size: 16px;
	color: #fff;
	font-family: "Inter-Bold";
`;
