import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Button, CardChat } from "../../components";
import {
	Container,
	ContainerButtons,
	ContainerPrincipal,
	ContentView,
	TextoAlerta,
} from "./style";
import FotoBiologo from "../../assets/imgPerfil/perfilBiologo.png";
import { useAuth } from "../../context/authContext";
import {
	verChatsDisponives,
	verChatsAbertos,
	verChatsEncerrados,
} from "../../service/api/apiVerChats";
import { criarChat } from "../../service/api/apiCriarChat";

const Chats = ({ navigation }) => {
	const { idUser } = useAuth();
	const [IsChat, SetIsChat] = useState("Ativos");
	const [Chats, setChats] = useState([]);
	const [error, setError] = useState(null);

	const fetchChats = async (tipo) => {
		try {
			let result;
			if (tipo === "Ativos") result = await verChatsAbertos(idUser);
			else if (tipo === "Disponiveis")
				result = await verChatsDisponives();
			else if (tipo === "Encerrados")
				result = await verChatsEncerrados(idUser);

			if (result.Chats?.length > 0) {
				setChats(result.Chats);
				setError(null);
			} else {
				setChats([]);
				setError(`Nenhum chat ${tipo.toLowerCase()} disponível`);
			}
		} catch (error) {
			setError(`Erro ao buscar chats ${tipo.toLowerCase()}`);
			console.error(error);
		}
	};

	useEffect(() => {
		fetchChats(IsChat);
	}, [IsChat]);

	useFocusEffect(
		React.useCallback(() => {
			fetchChats(IsChat);
		}, [IsChat])
	);

	return (
		<Container>
			<ContainerPrincipal>
				<ContainerButtons>
					<Button
						title="Ativos"
						onPress={() => SetIsChat("Ativos")}
						isActive={IsChat === "Ativos"}
					/>
					<Button
						title="Disponíveis"
						onPress={() => SetIsChat("Disponiveis")}
						isActive={IsChat === "Disponiveis"}
					/>
					<Button
						title="Encerrados"
						onPress={() => SetIsChat("Encerrados")}
						isActive={IsChat === "Encerrados"}
					/>
				</ContainerButtons>
				<ContentView>
					{error && <TextoAlerta>{error}</TextoAlerta>}
					{Chats.map((chat) => (
						<CardChat
						imagemUser={FotoBiologo}
							onPress={async () => {
								let chatId = chat.IdChat;

								if (IsChat === "Disponiveis") {
									try {
										chatId = await criarChat({
											chat: {
												IdBiologo: chat.IdProfissionais,
												IdUser: idUser, 
											},
										});

										console.log(
											"Chat criado com ID:",
											chatId
										);
									} catch (error) {
										console.error(
											"Erro ao criar o chat:",
											error.message
										);
										return;
									}
								}
								navigation.navigate("ChatMensagens", {
									chatId,
									nome:
										IsChat === "Disponiveis"
											? `${chat.PrimeiroNome || ""} ${
													chat.Sobrenome || ""
											  }`.trim()
											: chat.Biologo?.Nome ||
											  "Nome indisponível",
								});
							}}
							key={
								IsChat === "Disponiveis"
									? chat.IdProfissionais
									: chat.IdChat
							}
							nome={
								IsChat === "Disponiveis"
									? `${chat.PrimeiroNome || ""} ${
											chat.Sobrenome || ""
									  }`.trim()
									: chat.Biologo?.Nome || "Nome indisponível"
							}
							tipo={IsChat}
						/>
					))}
				</ContentView>
			</ContainerPrincipal>
		</Container>
	);
};

export default Chats;
