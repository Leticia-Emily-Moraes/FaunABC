import React, { useState, useEffect } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	TextError,
	ContainerTitulos,
} from "./style";
import {
	Button,
	InputTelefone,
	InputText,
	SelectNivelParental,
	IconeFolha,
} from "../../components";
import { UseCadastroUser } from "../../context/cadastroUserContext";

function CadastroDadosEmergenciasUser({ navigation, route }) {
	const idade = route.params;

	const { dadosCadastroUser, setDadosCadastroUser, handleSubmit } = UseCadastroUser();
	const [pNomePessoaEmergencia, setPNomePessoaEmergencia] = useState("");
	const [sobrenomePessoaEmergencia, setSobrenomePessoaEmergencia] =
		useState("");
	const [celularPessoaEmergencia, setCelularPessoaEmergencia] = useState("");
	const [nivelParental, setNivelParental] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const verificandoPreenchimento = async () => {
		if (
			!pNomePessoaEmergencia ||
			!sobrenomePessoaEmergencia ||
			!celularPessoaEmergencia ||
			!nivelParental
		) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			setDadosCadastroUser((prev) => ({
				...prev,
				cadastroResponsavel: {
					...prev.cadastroResponsavel,
					primeiroNome: pNomePessoaEmergencia,
					sobrenome: sobrenomePessoaEmergencia,
					celular: celularPessoaEmergencia,
					nivelParental: nivelParental,
				},
			}));

			setErrorMensagem("");
			try {
				await handleSubmit();
				navigation.navigate("ConfirmacaoDeCadastro");
			} catch (error) {
				console.error(error);
			}
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
			<IconeFolha />
		</Container>
	);
}

export default CadastroDadosEmergenciasUser;
