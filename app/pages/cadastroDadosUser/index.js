import React, { useState, useContext } from "react";
import { PerfilContext } from "../../context/perfilContext";
import { UseCadastroUser } from "../../context/cadastroUserContext";
import { UseCadastroProfissional } from "../../context/cadastroProfissionalContext";
import {
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
	ButtonsRedondos,
	InputText,
	InputEmail,
	InputSenha,
	IconeFolha,
} from "../../components";
import { Apple, Facebook, Google } from "../../assets/imgs";

function CadastroDadosUser({ navigation }) {
	const { dadosCadastroUser, setDadosCadastroUser } = UseCadastroUser();
	const { dadosCadastroProfissional, setDadosCadastroProfissional } =
		UseCadastroProfissional();
	const { perfil } = useContext(PerfilContext);

	const getDadosDoPerfil = (key) =>
		perfil === 1
			? dadosCadastroUser.cadastroPfisico[key]
			: dadosCadastroProfissional.cadastroProfissional[key];

	const [pNome, setPNome] = useState(getDadosDoPerfil("primeiroNome"));
	const [sobrenome, setSobrenome] = useState(getDadosDoPerfil("sobrenome"));
	const [email, setEmail] = useState(getDadosDoPerfil("email"));
	const [senha, setSenha] = useState(getDadosDoPerfil("senha"));
	const [confirmaSenha, setConfirmaSenha] = useState("");
	const [isSenhaValida, setIsSenhaValida] = useState(true);
	const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
	const [errorMensagem, setErrorMensagem] = useState("");

	const handleChange = (setter, key, value) => {
		setter(value);
		if (perfil === 1) {
			setDadosCadastroUser((prev) => ({
				...prev,
				cadastroPfisico: { ...prev.cadastroPfisico, [key]: value },
			}));
		} else {
			setDadosCadastroProfissional((prev) => ({
				...prev,
				cadastroProfissional: {
					...prev.cadastroProfissional,
					[key]: value,
				},
			}));
		}
	};

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
		if (!pNome || !sobrenome || !email || !senha || !confirmaSenha) {
			setErrorMensagem("Todos os campos devem estar preenchidos");
			return;
		}
		if (isSenhaValida) {
			navigation.navigate(
				perfil === 1 ? "CadastroEndereco" : "CadastroDadosProfissionais"
			);
		}
	};

	return (
		<Container>
			<TextoTitulo>Cadastre-se</TextoTitulo>
			{errorMensagem && <TextError>{errorMensagem}</TextError>}
			<ContainerInputs>
				<InputText
					TituloDoInput="Primeiro nome:"
					value={pNome}
					onChangeText={(text) =>
						handleChange(setPNome, "primeiroNome", text)
					}
					placeholder="Primeiro nome"
				/>
				<InputText
					TituloDoInput="Sobrenome:"
					value={sobrenome}
					onChangeText={(text) =>
						handleChange(setSobrenome, "sobrenome", text)
					}
					placeholder="Sobrenome"
				/>
				<InputEmail
					value={email}
					onChangeText={(text) =>
						handleChange(setEmail, "email", text)
					}
				/>
				<InputSenha
					value={senha}
					onChangeText={(text) =>
						handleChange(setSenha, "senha", text)
					}
					secureTextEntry={true}
				/>
				<InputSenha
					TituloDoInput="Confirme a senha:"
					value={confirmaSenha}
					onChangeText={handleConfirmarSenhaChange}
					placeholder="Confirmar senha"
					secureTextEntry={true}
				/>
				{!isSenhaValida && <TextError>{senhaErrorMessage}</TextError>}
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
	);
}

export default CadastroDadosUser;
