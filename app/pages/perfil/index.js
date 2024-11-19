import React, { useState, useEffect } from "react";
import {
	Container,
	ViewContent,
	TextoAuxiliar,
	TextPrincipal,
	ViewText,
} from "./style";
import { ButtonGoBack, Button } from "../../components";
import { useAuth } from "../../context/authContext";
import { Perfil } from "../../service/api/apiVerPerfil";
import { FontAwesome } from "@expo/vector-icons";

function VerPerfil({ navigation }) {
	const { idLogin } = useAuth();
	const [dadosPerfil, setDadosPerfil] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPerfil = async () => {
			try {
				const dados = await Perfil(idLogin);
				setDadosPerfil(dados.userData);
			} catch (err) {
				setError("Erro ao carregar os dados do perfil");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchPerfil();
	}, [idLogin]);

	if (loading) return <TextoAuxiliar>Carregando...</TextoAuxiliar>;
	if (error) return <TextoAuxiliar>{error}</TextoAuxiliar>;

	let tipoUsuario;
	switch (dadosPerfil?.TipoUsuario) {
		case "PFisico":
			tipoUsuario = "Usuário Padrão";
			break;
		case "ONG":
			tipoUsuario = "Usuário ONG";
			break;
		case "Biologo":
			tipoUsuario = "Usuário Biólogo";
			break;
		default:
			tipoUsuario = "Tipo de usuário desconhecido";
	}

	return (
		<Container>
			<ButtonGoBack />
			{dadosPerfil ? (
				<ViewContent>
					<FontAwesome
						name="circle-thin"
						size={150}
						color="black"
					/>
					<ViewText>
						<TextPrincipal>Nome do Usuário:</TextPrincipal>
						<TextoAuxiliar>
							{dadosPerfil.PrimeiroNome} {dadosPerfil.Sobrenome}{" "}
							{dadosPerfil.TipoUsuario === "ONG"
								? dadosPerfil.NomeOng
								: ""}
						</TextoAuxiliar>
					</ViewText>
					<ViewText>
						<TextPrincipal>Tipo de Perfil:</TextPrincipal>
						<TextoAuxiliar>{tipoUsuario}</TextoAuxiliar>
					</ViewText>
					{tipoUsuario == "Usuário Biólogo" && (
							<ViewText>
								<TextPrincipal>
									Registro Profissional:
								</TextPrincipal>
								<TextoAuxiliar>
									{dadosPerfil.RegistroBiologo}
								</TextoAuxiliar>
							</ViewText>
					)}
					{dadosPerfil.Responsavel && (
						<>
							<ViewText>
								<TextPrincipal>
									Contato de emergência:
								</TextPrincipal>
								<TextoAuxiliar>
									{dadosPerfil.Responsavel.PrimeiroNome}{" "}
									{dadosPerfil.Responsavel.Sobrenome}
								</TextoAuxiliar>
							</ViewText>
							<ViewText>
								<TextPrincipal>
									Número do contato:
								</TextPrincipal>
								<TextoAuxiliar>
									{dadosPerfil.Responsavel.Celular}
								</TextoAuxiliar>
							</ViewText>
						</>
					)}

					{dadosPerfil.Endereco && (
						<>
							<ViewText>
								<TextPrincipal>Cep:</TextPrincipal>
								<TextoAuxiliar>
									{dadosPerfil.Endereco.Cep}
								</TextoAuxiliar>
							</ViewText>
							<ViewText>
								<TextPrincipal>Rua:</TextPrincipal>
								<TextoAuxiliar>
								{dadosPerfil.Endereco.Rua}
								</TextoAuxiliar>
							</ViewText>
							<ViewText>
								<TextPrincipal>Cidade:</TextPrincipal>
								<TextoAuxiliar>
								{dadosPerfil.Endereco.Cidade}
								</TextoAuxiliar>
							</ViewText>
						</>
					)}
					<Button title="Editar perfil" />
				</ViewContent>
			) : (
				<TextPrincipal>Nenhum dado encontrado.</TextPrincipal>
			)}
		</Container>
	);
}

export default VerPerfil;
