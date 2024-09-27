import React, { useState } from "react";
import { UseCadastroOng } from "../../context/cadastroOngContext";
import {
	ContainerScroll,
	Container,
	ContainerInputs,
	TextoNormal,
	TextoTitulo,
	ContainerEntrarCom,
	ContainerButtonsEntrarCom,
	TextError,
} from "./style";
import {
	Button,
	InputText,
	InputEmail,
	InputSenha,
	InputCNPJ,
	InputINSS,
	InputTelefone,
	IconeFolha,
	ButtonsRedondos,
} from "../../components";
import { Apple, Facebook, Google } from "../../assets/imgs";
function CadastroDadosOng({ navigation }) {
	const { dadosCadastroOng, setDadosCadastroOng } = UseCadastroOng();
	const [nomeOng, setNomeOng] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [celular, setCelular] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [inss, setInss] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmaSenha, setConfirmaSenha] = useState("");
	const [isSenhaValida, setIsSenhaValida] = useState(true);
	const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const handleConfirmarSenhaChange = (text) => {
		setConfirmaSenha(text);
		if (text !== senha) {
			setIsSenhaValida(false);
			setSenhaErrorMessage("As senhas não coincidem");
		} else {
			setIsSenhaValida(true);
			setSenhaErrorMessage("");
		}
	};
	const verificandoPreenchimento = () => {
		if (
			!nomeOng ||
			!email ||
			!celular ||
			!cnpj ||
			!inss ||
			!senha ||
			!confirmaSenha
		) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			console.log(
				nomeOng,
				email,
				celular,
				cnpj,
				inss,
				senha,
				confirmaSenha
			);
			return;
		}
		if (isSenhaValida) {
			setDadosCadastroOng((prev) => ({
				...prev,
				CadastroOng: {
					...prev.CadastroOng,
					NomeOng: nomeOng,
					email: email,
					telefone: telefone,
					celular: celular,
					cnpj: cnpj,
					inss: inss,
					senha: senha,
				},
			}));
			setErrorMensagem("");
			console.log(dadosCadastroOng);
			navigation.navigate("CadastroEndereco");
		}
	};

	return (
		<ContainerScroll>
			<Container>
				<TextoTitulo>Cadastre os dados da ONG</TextoTitulo>
				{errorMensagem && <TextError>{errorMensagem}</TextError>}
				<ContainerInputs>
					<InputText
						TituloDoInput="Nome da Ong:"
						value={nomeOng}
						onChangeText={setNomeOng}
						placeholder="Nome da Ong"
					/>
					<InputEmail
						value={email}
						onChangeText={setEmail}
					/>

					<InputTelefone
						TituloDoInput="Telefone:"
						placeholder="Digite seu numero de telefone"
						value={telefone}
						onChangeTelefone={setTelefone}
					/>
					<InputTelefone
						TituloDoInput="Celular:"
						placeholder="Digite seu numero de celular"
						value={celular}
						onChangeTelefone={setCelular}
					/>
					<InputCNPJ
						value={cnpj}
						onChangeCNPJ={setCnpj}
					/>
					<InputINSS
						value={inss}
						onChangeINSS={setInss}
					/>
					<InputSenha
						value={senha}
						onChangeText={setSenha}
						secureTextEntry={true}
					/>
					<InputSenha
						TituloDoInput="Confirme a senha:"
						value={confirmaSenha}
						onChangeText={handleConfirmarSenhaChange}
						placeholder="Confirmar senha"
						secureTextEntry={true}
					/>
					{!isSenhaValida && (
						<TextError>{senhaErrorMessage}</TextError>
					)}
				</ContainerInputs>
				<Button
					title="Cadastrar"
					onPress={verificandoPreenchimento}
				/>
				<ContainerEntrarCom>
					<TextoNormal>Cadastrar com:</TextoNormal>
					<ContainerButtonsEntrarCom>
						<ButtonsRedondos img={Facebook} />
						<ButtonsRedondos img={Google} />
						<ButtonsRedondos img={Apple} />
					</ContainerButtonsEntrarCom>
				</ContainerEntrarCom>
				<IconeFolha />
			</Container>
		</ContainerScroll>
	);
}

export default CadastroDadosOng;
