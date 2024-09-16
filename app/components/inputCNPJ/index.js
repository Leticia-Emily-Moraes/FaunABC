import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Container, Input, Label, TextError } from "./style";

function InputCNPJ({
	TituloDoInput = "CNPJ:",
	placeholder = "Digite seu CNPJ",
	value = "",
	onChangeCNPJ = () => {},
	...props
}) {
	const [CNPJ, setCNPJ] = useState(value);
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const validateCNPJ = (CNPJ) => {
		const CNPJClean = CNPJ.replace(/\D/g, "");
		if (CNPJClean.length !== 14 || !isValidCNPJ(CNPJClean)) {
			setMessage("CNPJ inválido");
			return false;
		}
		setMessage("");
		return true;
	};

	const isValidCNPJ = (CNPJ) => {
		let sum = 0;
		let pos = 5;

		for (let i = 0; i < 12; i++) {
			sum += parseInt(CNPJ[i]) * pos--;
			if (pos < 2) pos = 9;
		}

		let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
		if (result !== parseInt(CNPJ[12])) return false;

		sum = 0;
		pos = 6;

		for (let i = 0; i < 13; i++) {
			sum += parseInt(CNPJ[i]) * pos--;
			if (pos < 2) pos = 9;
		}

		result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
		if (result !== parseInt(CNPJ[13])) return false;

		return true;
	};

	const handleCNPJChange = (text) => {
		const newCNPJ = text;
		setCNPJ(newCNPJ);
		setIsValid(validateCNPJ(newCNPJ));
		onChangeCNPJ(newCNPJ);
	};

	return (
		<Container>
			{TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
			<TextInputMask
				type={"cnpj"}
				value={CNPJ}
				onChangeText={handleCNPJChange}
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

export default InputCNPJ;
