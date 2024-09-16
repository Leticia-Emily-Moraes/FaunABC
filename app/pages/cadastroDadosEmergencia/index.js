import React, { useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	TextError,
	ContainerTitulos,
} from "./style";
import Button from "../../components/button";
import InputTelefone from "../../components/inputTelefone";
import InputText from "../../components/inputText";
import SelectNivelParental from "../../components/selectNivelParental";
import Icon from "../../components/iconFolha";

function CadastroDadosEmergenciasUser({ navigation, route }) {
	const idade = route.params;
	const [pNomePessoaEmergencia, setPNomePessoaEmergencia] = useState("");
	const [sobrenomePessoaEmergencia, setSobrenomePessoaEmergencia] =
		useState("");
	const [celularPessoaEmergencia, setCelularPessoaEmergencia] = useState("");
	const [nivelParental, setNivelParental] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const verificandoPreenchimento = () => {
		if (
			!pNomePessoaEmergencia ||
			!sobrenomePessoaEmergencia ||
			!celularPessoaEmergencia ||
			!nivelParental
		) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			setErrorMensagem("");
			navigation.navigate("ConfirmacaoDeCadastro");
		}
	};

	return (
		<Container>
			<ContainerTitulos>
				<TextoTitulo>
					Cadastre os dados de uma pessoa de emergência
				</TextoTitulo>
				<TextoNormal>
					Obrigatório ser o responsável para menores de idade
				</TextoNormal>
			</ContainerTitulos>

			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputText
					TituloDoInput="Primeiro nome:"
					value={pNomePessoaEmergencia}
					onChangeText={setPNomePessoaEmergencia}
					placeholder="Primeiro nome"
				/>
				<InputText
					TituloDoInput="Sobrenome:"
					value={sobrenomePessoaEmergencia}
					onChangeText={setSobrenomePessoaEmergencia}
					placeholder="Sobrenome"
				/>
				<InputTelefone
					TituloDoInput="Celular:"
					placeholder="Digite seu numero de celular"
					value={celularPessoaEmergencia}
					onChangeTelefone={setCelularPessoaEmergencia}
				/>
				<SelectNivelParental
					TituloDoInput="Nível parental:"
					value={nivelParental}
					onValueChange={setNivelParental}
					idadeUser={idade}
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

export default CadastroDadosEmergenciasUser;
