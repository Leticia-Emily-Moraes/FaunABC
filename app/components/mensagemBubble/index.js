import React from "react";
import {
	Container,
	MessageBubble,
	MessageText,
	MessageContainer,
} from "./style";

const BubbleMensage = ({ text, isSender }) => {
	return (
		<Container>
			<MessageContainer isSender={isSender}>
				<MessageBubble isSender={isSender}>
					<MessageText>{text}</MessageText>
				</MessageBubble>
			</MessageContainer>
		</Container>
	);
};

export default BubbleMensage;
