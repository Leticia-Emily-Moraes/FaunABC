import React, { useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoTitulo,
	TextError,
} from "./style";
import { formatarData } from "../../helpers/helpers";
import {
	Button,
	InputTelefone,
	InputPadrao,
	InputCPF,
	InputDataDeNascimento,
	IconeFolha,
} from "../../components";
import { UseCadastroProfissional } from "../../context/cadastroProfissionalContext";

function CadastroDadosProfissionais({ navigation }) {
	const {
		dadosCadastroProfissional,
		setDadosCadastroProfissional,
		handleSubmit,
	} = UseCadastroProfissional();
	const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
	const [telefone, setTelefone] = useState(dadosCadastroProfissional.cadastroProfissional.telefone);
	const [celular, setCelular] = useState(dadosCadastroProfissional.cadastroProfissional.celular);
	const [cpf, setCpf] = useState(dadosCadastroProfissional.cadastroProfissional.cpf);
	const [registroProfissional, setRegistroProfissional] = useState(dadosCadastroProfissional.cadastroProfissional.registroProfissional);
	const [errorMensagem, setErrorMensagem] = useState("");

	const verificandoPreenchimento = async () => {
		if (!dataDeNascimento || !celular || !cpf || !registroProfissional) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			const dataFormatada = formatarData(dataDeNascimento);

			const novosDadosCadastro = {
				...dadosCadastroProfissional,
				cadastroProfissional: {
					...dadosCadastroProfissional.cadastroProfissional,
					dataDeNascimento: dataFormatada,
					telefone,
					celular,
					cpf,
					registroProfissional,
				},
			};

			setDadosCadastroProfissional(novosDadosCadastro);
			try {
				await handleSubmit(novosDadosCadastro);
				console.log(novosDadosCadastro);
				navigation.navigate("ConfirmacaoDeCadastro");
			} catch (error) {
				console.error("Erro ao enviar os dados:", error);
			}
		}
	};

	return (
		<Container>
			<TextoTitulo>Cadastre seus dados Profissionais</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputDataDeNascimento
					value={dataDeNascimento}
					onChangeData={setDataDeNascimento}
				/>
				<InputTelefone
					TituloDoInput="Celular:"
					placeholder="Digite seu numero de celular"
					value={celular}
					onChangeTelefone={setCelular}
				/>
				<InputTelefone
					value={telefone}
					onChangeTelefone={setTelefone}
				/>
				<InputCPF
					value={cpf}
					onChangeCPF={setCpf}
				/>
				<InputPadrao
					TituloDoInput="Registro Profissional (CRBio, CRMV):"
					value={registroProfissional}
					onChangeText={setRegistroProfissional}
					placeholder="Seu registro profissional"
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

export default CadastroDadosProfissionais;
