import React, { useState } from "react";
import {
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	TextError,
} from "./style";
import Button from "../../components/button";
import InputTelefone from "../../components/inputTelefone";
import InputCPF from "../../components/inputCPF";
import InputDataDeNascimento from "../../components/inputDataDeNascimento";
import Icon from "../../components/iconFolha";

function CadastroDadosPessoaisUser({ navigation }) {
	const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
	const [telefone, setTelefone] = useState("");
	const [celular, setCelular] = useState("");
	const [cpf, setCpf] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	
	const calcularIdade = () =>{
		const hoje = new Date();
		const dataNascimento = new Date(dataDeNascimento);
		let idade = hoje.getFullYear() - dataNascimento.getFullYear();
		const diferencaDeMes = hoje.getMonth() - dataNascimento.getMonth();
		
		if (diferencaDeMes < 0 || (diferencaDeMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
			idade--;
		}
		
		return idade;
	}
	
	const verificandoPreenchimento = () => {
		if (!dataDeNascimento || !celular || !cpf) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		} else {
			const idade = calcularIdade(dataDeNascimento);
			setErrorMensagem("");
			navigation.navigate("CadastroDadosEmergenciasUser", {
				idade: idade
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
			<Icon />
		</Container>
	);
}

export default CadastroDadosPessoaisUser;
