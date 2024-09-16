import React, { useState, useEffect } from "react";
import { Container, Input, Label, TextError } from "./style";

function InputPadrao({
	TituloDoInput = "Título",
	placeholder = "Digite aqui...",
	value = "",
	onChangeNumber = () => {},
	...props
}) {
	const [text, setText] = useState(value);

	return (
		<Container>
			{TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
			<Input
				placeholder={placeholder}
				value={text}
				onChangeText={setText}
				{...props}
			/>
		</Container>
	);
}

export default InputPadrao;
