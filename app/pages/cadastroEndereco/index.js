import React, { useState, useEffect, useContext } from "react";
import { Container, TextoTitulo, ContainerInputs, TextError } from "./style";
import InputCEP from "../../components/inputCEP";
import InputText from "../../components/inputText";
import InputNumero from "../../components/inputNumero";
import Button from "../../components/button";
import Icon from "../../components/iconFolha";
import { PerfilContext } from "../../context/perfilContext";
function CadastroEndereco({ navigation }) {
	const [cep, setCep] = useState("");
	const [address, setAddress] = useState(null);
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [isRioGrandeDaSerra, setIsRioGrandeDaSerra] = useState(false);
	const [errorMensagem, setErrorMensagem] = useState("");
	const [mensagemTitulo, setmensagemTitulo] = useState("");
	const { perfil } = useContext(PerfilContext);

	useEffect(() => {
		if (perfil === "1") {
			setmensagemTitulo("Cadastre seu endereço");
		} else if (perfil === "2") {
			setmensagemTitulo("Cadastre o endereço da ONG");
		}
	}, [perfil]);

	const handleAddressFound = (addressData) => {
		if (addressData) {
			setAddress(addressData);
			setEndereco(addressData.logradouro);
			setBairro(addressData.bairro);
			setCidade(addressData.localidade);
			setIsRioGrandeDaSerra(addressData.logradouro === "" && addressData.bairro === "");
		} else {
			setEndereco("");
			setBairro("");
			setCidade("");
		}
	};

	useEffect(() => {
		if (cep.length !== 8) {
			setAddress(null);
			setEndereco("");
			setBairro("");
			setCidade("");
		}
	}, [cep]);

	const verificandoPreenchimento = () => {
		if (!cep || !endereco || !numero || !bairro || !cidade) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		}

		if (perfil === "1") {
			navigation.navigate("CadastroDadosPessoaisUser");
		} else if (perfil === "2") {
			navigation.navigate("ConfirmacaoDeCadastro");
		}
	};

	return (
		<Container>
			<TextoTitulo>{mensagemTitulo}</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputCEP
					value={cep}
					onChangeText={setCep}
					onAddressFound={handleAddressFound}
				/>
				<InputText
					TituloDoInput="Endereço:"
					value={endereco}
					isEditable={isRioGrandeDaSerra}
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
					isEditable={isRioGrandeDaSerra}
					placeholder="Bairro"
				/>
				<InputText
					TituloDoInput="Cidade:"
					value={cidade}
					onChangeText={setCidade}
					isEditable={false}
					placeholder="Cidade"
				/>
			</ContainerInputs>
			<Button
				title="Confirmar"
				onPress={verificandoPreenchimento}
			/>
			<Icon />
		</Container>
	);
}

export default CadastroEndereco;
