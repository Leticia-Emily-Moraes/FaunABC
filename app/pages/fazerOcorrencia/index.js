import React, { useState, useEffect } from "react";
import {
	Container,
	ViewContent,
	ContainerTitulo,
	TextoTitulo,
	PickerWrapper,
	Label,
} from "./style";
import {
	ButtonGoBack,
	InputText,
	Button,
	InputCEP,
	InputNumero,
} from "../../components";
import { useAuth } from "../../context/authContext";
import { Picker } from "@react-native-picker/picker";
import { CriarAlerta } from "../../service/api/apiAddAlerta";

function CriarAlertas({ navigation }) {
	const [titulo, setTitulo] = useState("");
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [descricao, setDescricao] = useState("");
	const [isRioGrandeDaSerra, setIsRioGrandeDaSerra] = useState(false);
	const [tipoDoAlerta, setTipoDoAlerta] = useState("default");

	const { idLogin } = useAuth();

	const handleAddressFound = (addressData) => {
		if (addressData) {
			setEndereco(addressData.logradouro || "");
			setBairro(addressData.bairro || "");
			setCidade(addressData.localidade || "");
			setIsRioGrandeDaSerra(
				!addressData.logradouro && !addressData.bairro
			);
		} else {
			setEndereco("");
			setBairro("");
			setCidade("");
			setIsRioGrandeDaSerra(false);
		}
	};

	const handleSubmit = async () => {
		if (!titulo || tipoDoAlerta === "default" || !cep || !bairro || !cidade) {
			alert("Todos os campos são obrigatórios!");
			return;
		}

		const response = await CriarAlerta({
			alerta: {
				titulo,
				tipoAlerta: tipoDoAlerta,
				logradouro: endereco,
				bairro,
				cidade,
				cep,
				idAutor: idLogin,
			},
		});

		if (response) {
			alert(response.message);
			navigation.goBack()
		}
	};

	useEffect(() => {
		if (cep.length !== 8) {
			setEndereco("");
			setBairro("");
			setCidade("");
			setIsRioGrandeDaSerra(false);
		}
	}, [cep]);

	return (
		<Container>
			<ViewContent>
				<ContainerTitulo>
					<ButtonGoBack />
					<TextoTitulo>Adicionar Alerta</TextoTitulo>
				</ContainerTitulo>

				<InputText
					TituloDoInput="Titulo do Alerta"
					value={titulo}
					onChangeText={setTitulo}
					placeholder="Insira o título"
				/>
				<Label>Tipo da Ocorrência</Label>
				<PickerWrapper>
					<Picker
						selectedValue={tipoDoAlerta}
						onValueChange={(itemValue) =>
							setTipoDoAlerta(itemValue)
						}
					>
						<Picker.Item
							key="default"
							label="Selecione o tipo do alerta"
							value=""
						/>
						<Picker.Item
							label="Atropelamento"
							value="Atropelamento"
						/>
						<Picker.Item
							label="Surto Epidemiológico"
							value="SurtoEpidemiologico"
						/>
						<Picker.Item
							label="Época"
							value="Epoca"
						/>
					</Picker>
				</PickerWrapper>
				<InputCEP
					value={cep}
					onChangeText={setCep}
					onAddressFound={handleAddressFound}
				/>

				<InputText
					TituloDoInput="Endereço:"
					value={endereco}
					onChangeText={setEndereco}
					editable={isRioGrandeDaSerra}
					placeholder="Endereço"
				/>

				<InputNumero
					TituloDoInput="Número:"
					value={numero}
					onChangeNumber={setNumero}
					placeholder="Número"
				/>

				<InputText
					TituloDoInput="Bairro:"
					value={bairro}
					onChangeText={setBairro}
					editable={isRioGrandeDaSerra}
					placeholder="Bairro"
				/>

				<InputText
					TituloDoInput="Cidade:"
					value={cidade}
					onChangeText={setCidade}
					editable={false}
					placeholder="Cidade"
				/>
				<InputText
					TituloDoInput="Descrição:"
					value={descricao}
					onChangeText={setDescricao}
					editable={false}
					placeholder="Descreva o ocorrido"
				/>
				<Button
					title="Confirmar"
					onPress={handleSubmit}
				/>
			</ViewContent>
		</Container>
	);
}

export default CriarAlertas;
