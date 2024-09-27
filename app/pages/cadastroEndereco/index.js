import React, { useState, useEffect, useContext } from "react";
import { Container, TextoTitulo, ContainerInputs, TextError } from "./style";
import {
	Button,
	InputCEP,
	InputText,
	InputNumero,
	IconeFolha,
} from "../../components";
import { PerfilContext } from "../../context/perfilContext";
import { UseCadastroUser } from "../../context/cadastroUserContext";
import { UseCadastroOng } from "../../context/cadastroOngContext";

function CadastroEndereco({ navigation }) {
	const { dadosCadastroUser, setDadosCadastroUser } = UseCadastroUser();
	const { dadosCadastroOng, setDadosCadastroOng } = UseCadastroOng();
	const { perfil } = useContext(PerfilContext);

	const getDadosDoPerfil = (key) =>
		perfil === 1
			? dadosCadastroUser.endereco[key]
			: dadosCadastroOng.endereco[key];
	const [cep, setCep] = useState(getDadosDoPerfil("cep"));
	const [address, setAddress] = useState(null);
	const [endereco, setEndereco] = useState(getDadosDoPerfil("logradouro"));
	const [numero, setNumero] = useState(getDadosDoPerfil("numero"));
	const [bairro, setBairro] = useState(getDadosDoPerfil("bairro"));
	const [cidade, setCidade] = useState(getDadosDoPerfil("cidade"));
	const [isRioGrandeDaSerra, setIsRioGrandeDaSerra] = useState(false);
	const [errorMensagem, setErrorMensagem] = useState("");
	const [mensagemTitulo, setmensagemTitulo] = useState("");

	useEffect(() => {
		if (perfil === 1) {
			setmensagemTitulo("Cadastre seu endereço");
		} else {
			setmensagemTitulo("Cadastre o endereço da ONG");
		}
	}, [perfil]);

	const handleChange = (setter, key, value) => {
		setter(value);
		if (perfil === 1) {
			setDadosCadastroUser((prev) => ({
				...prev,
				endereco: {
					...prev.endereco,
					[key]: value,
				},
			}));
		} else {
			setDadosCadastroOng((prev) => ({
				...prev,
				endereco: {
					...prev.endereco,
					[key]: value,
				},
			}));
		}
	};

	const handleAddressFound = (addressData) => {
		if (addressData) {
			setAddress(addressData);
			handleChange(setEndereco, "logradouro", addressData.logradouro);
			handleChange(setBairro, "bairro", addressData.bairro);
			handleChange(setCidade, "cidade", addressData.localidade);
			setIsRioGrandeDaSerra(
				addressData.logradouro === "" && addressData.bairro === ""
			);
		} else {
			handleChange(setEndereco, "logradouro", "");
			handleChange(setBairro, "bairro", "");
			handleChange(setCidade, "cidade", "");
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
		navigation.navigate(
			perfil === 1 ? "CadastroDadosPessoaisUser" : "ConfirmacaoDeCadastro"
		);
	};

	return (
		<Container>
			<TextoTitulo>{mensagemTitulo}</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputCEP
					value={cep}
					onChangeText={(text) => handleChange(setCep, "cep", text)}
					onAddressFound={handleAddressFound}
				/>
				<InputText
					TituloDoInput="Endereço:"
					value={endereco}
					onChangeText={(text) =>
						handleChange(setEndereco, "logradouro", text)
					}
					isEditable={isRioGrandeDaSerra}
					placeholder="Endereço"
				/>
				<InputNumero
					TituloDoInput="Número:"
					value={numero}
					onChangeNumber={(text) =>
						handleChange(setNumero, "numero", text)
					}
					placeholder="Número"
				/>
				<InputText
					TituloDoInput="Bairro:"
					value={bairro}
					onChangeText={(text) =>
						handleChange(setBairro, "bairro", text)
					}
					isEditable={isRioGrandeDaSerra}
					placeholder="Bairro"
				/>
				<InputText
					TituloDoInput="Cidade:"
					value={cidade}
					onChangeText={(text) =>
						handleChange(setCidade, "cidade", text)
					}
					isEditable={false}
					placeholder="Cidade"
				/>
			</ContainerInputs>
			<Button
				title="Confirmar"
				onPress={verificandoPreenchimento}
			/>
			<IconeFolha />
		</Container>
	);
}

export default CadastroEndereco;
