import React, { useEffect, useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
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
	const { dadosCadastroProfissional, setDadosCadastroProfissional } =
		UseCadastroProfissional();
	const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
	const [telefone, setTelefone] = useState("");
	const [celular, setCelular] = useState("");
	const [cpf, setCpf] = useState("");
	const [registroProfissional, setRegistroProfissional] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const verificandoPreenchimento = () => {
		if (!dataDeNascimento || !celular || !cpf) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			const dataFormatada = formatarData(dataDeNascimento);

			setDadosCadastroProfissional((prev) => ({
				...prev,
				cadastroProfissional: {
					...prev.cadastroProfissional,
					dataDeNascimento: dataFormatada,
					telefone,
					celular,
					cpf,
					registroProfissional,
				},
			}));
			setErrorMensagem("");
			navigation.navigate("ConfirmacaoDeCadastro");
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
