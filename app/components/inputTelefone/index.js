import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Container, Input, Label, TextError } from "./style";

function InputTelefone({
	TituloDoInput = "Telefone:",
	placeholder = "Digite seu telefone",
	value = "",
	onChangeTelefone = () => {},
	...props
}) {
	const [Telefone, setTelefone] = useState(value);
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const validateTelefone = (Telefone) => {
		const somenteNumeros = Telefone.replace(/\D/g, "");
		if (somenteNumeros.length < 10 || somenteNumeros.length > 12) {
			setMessage("Telefone inválido");
			return false;
		}
		setMessage("");
		return true;
	};

	const handleTelefoneChange = (text) => {
		const newTelefone = text;
		setTelefone(newTelefone);
		setIsValid(validateTelefone(newTelefone));
		onChangeTelefone(newTelefone);
	};

	return (
		<Container>
			{TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
			<TextInputMask
				type={"cel-phone"}
				options={{
					maskType: "BRL",
					withDDD: true,
					dddMask: "(99) ",
				}}
				value={Telefone}
				onChangeText={handleTelefoneChange}
				placeholder={placeholder}
				customTextInput={Input}
				customTextInputProps={{
					isValid: isValid,
					...props,
				}}
			/>
			{!isValid && <TextError>{message}</TextError>}
		</Container>
	);
}

export default InputTelefone;
