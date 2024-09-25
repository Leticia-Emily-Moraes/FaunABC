import React, { useState } from "react";
import { UseCadastroUser } from "../../context/cadastroUserContext";
import { formatarData } from "../../helpers/helpers";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	TextError,
} from "./style";
import {
	Button,
	InputTelefone,
	InputCPF,
	InputDataDeNascimento,
	IconeFolha,
} from "../../components";

function CadastroDadosPessoaisUser({ navigation }) {
	const { dadosCadastroUser, setDadosCadastroUser } = UseCadastroUser();
	const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
	const [telefone, setTelefone] = useState("");
	const [celular, setCelular] = useState("");
	const [cpf, setCpf] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const calcularIdade = () => {
		const hoje = new Date();
		const dataNascimento = new Date(dataDeNascimento);
		let idade = hoje.getFullYear() - dataNascimento.getFullYear();
		const diferencaDeMes = hoje.getMonth() - dataNascimento.getMonth();

		if (
			diferencaDeMes < 0 ||
			(diferencaDeMes === 0 && hoje.getDate() < dataNascimento.getDate())
		) {
			idade--;
		}

		return idade;
	};

	const verificandoPreenchimento = () => {
		if (!dataDeNascimento || !celular || !cpf) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			const dataFormatada = formatarData(dataDeNascimento);
			const idade = calcularIdade(dataDeNascimento);

			setDadosCadastroUser((prev) => ({
				...prev,
				cadastroPfisico: {
					...prev.cadastroPfisico,
					dataDeNascimento: dataFormatada,
					telefone,
					celular,
					cpf,
				},
			}));

			setErrorMensagem("");
			navigation.navigate("CadastroDadosEmergenciasUser", {
				idade: idade,
			});
		}
	};

	return (
		<Container>
			<TextoTitulo>Cadastre seus dados pessoais</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputDataDeNascimento
					value={dataDeNascimento}
					onChangeData={setDataDeNascimento}
				/>
				<InputTelefone
					value={telefone}
					onChangeTelefone={setTelefone}
				/>
				<InputTelefone
					TituloDoInput="Celular:"
					placeholder="Digite seu numero de celular"
					value={celular}
					onChangeTelefone={setCelular}
				/>
				<InputCPF
					value={cpf}
					onChangeCPF={setCpf}
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

export default CadastroDadosPessoaisUser;
