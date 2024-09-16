import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Container, Input, Label, TextError } from "./style";

function InputINSS({
	TituloDoInput = "INSS:",
	placeholder = "Digite seu número do INSS",
	value = "",
	onChangeINSS = () => {},
	...props
}) {
	const [INSS, setINSS] = useState(value);
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const validateINSS = (INSS) => {
		const INSSClean = INSS.replace(/\D/g, "");
		if (INSSClean.length !== 11 || !isValidINSS(INSSClean)) {
			setMessage("INSS inválido");
			return false;
		}
		setMessage("");
		return true;
	};

	const isValidINSS = (INSS) => {
		let sum = 0;
		let weight = 2;

		for (let i = INSS.length - 2; i >= 0; i--) {
			sum += parseInt(INSS[i]) * weight;
			weight = weight === 9 ? 2 : weight + 1;
		}

		const remainder = sum % 11;
		const digit = remainder < 2 ? 0 : 11 - remainder;

		return digit === parseInt(INSS[INSS.length - 1]);
	};

	const handleINSSChange = (text) => {
		const newINSS = text;
		setINSS(newINSS);
		setIsValid(validateINSS(newINSS));
		onChangeINSS(newINSS);
	};

	return (
		<Container>
			{TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
			<TextInputMask
				type={"custom"}
				options={{ mask: "999.99999.99-9" }}
				value={INSS}
				onChangeText={handleINSSChange}
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

export default InputINSS;
