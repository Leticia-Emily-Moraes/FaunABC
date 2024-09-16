import React, { useState, useEffect } from "react";
import { Container, Label, PickerWrapper } from "./style";
import { Picker } from "@react-native-picker/picker";

function SelectNivelParental({
	TituloDoInput = "Título",
	value = "",
	onChangeText = () => {},
	isEditable = true,
	idadeUser = {},
	...props
}) {
	const [parentesco, setParentesco] = useState(value);
	const [menorDeIdade, setMenorDeIdade] = useState(false);

	const handleValueChange = (itemValue) => {
		setParentesco(itemValue);
		onChangeText(itemValue);
	};

	useEffect(() => {
		setParentesco(value);
	}, [value]);

	useEffect(() => {
		const idade = idadeUser?.idade ?? 0;
		setMenorDeIdade(idade < 18);
	}, [idadeUser]);

	const renderizaOsSelects = () => {
		const items = [
			<Picker.Item
				key="default"
				label="Selecione o nível parental da pessoa de emergência"
				value=""
			/>,
			<Picker.Item
				key="pai_padrasto"
				label="Pai/Padrasto"
				value="PaiPadrasto"
			/>,
			<Picker.Item
				key="mae_madrasta"
				label="Mãe/Madrasta"
				value="MaeMadastra"
			/>,
			<Picker.Item
				key="avo_avoa"
				label="Avô/Avó"
				value="AvoAvoa"
			/>,
			<Picker.Item
				key="responsavel_legal"
				label="Responsável legal"
				value="ResponsavelLegal"
			/>,
		];

		if (!menorDeIdade) {
			items.push(
				<Picker.Item
					key="tio_tia"
					label="Tio/Tia"
					value="TioTia"
				/>,
				<Picker.Item
					key="filho_filha"
					label="Filho/Filha"
					value="FilhoFilha"
				/>,
				<Picker.Item
					key="irmao_irma"
					label="Irmão/Irmã"
					value="IrmaoIrma"
				/>,
				<Picker.Item
					key="outro"
					label="Outro"
					value="Outro"
				/>,
			);
		}

		return items;
	};

	return (
		<Container>
			{TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
			<PickerWrapper>
				<Picker
					selectedValue={parentesco}
					onValueChange={handleValueChange}
					enabled={isEditable}
					{...props}
				>
					{renderizaOsSelects()}
				</Picker>
			</PickerWrapper>
		</Container>
	);
}

export default SelectNivelParental;
