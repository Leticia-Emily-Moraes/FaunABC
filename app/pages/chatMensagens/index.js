import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { API_BASE_URL } from "../../config/config";
import { useFocusEffect } from "@react-navigation/native";
import { ButtonGoBack, BubbleMensage } from "../../components";
import {
	Container,
	ContentChat,
	ContainerView,
	Imagem,
	ContainerImagem,
	TituloDescricao,
	ContainerText,
	ContentMensagem,
	ContainerMensagem,
	ContainerPrincipal,
	Input,
	ContainerEscrever,
	ButtonPrincipal,
} from "./style";
import { Octicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../../context/authContext";
import { verMensagens } from "../../service/api/apiVerMensagens";
import { enviarMensagem } from "../../service/api/apiEnviarMensagem";

const ChatMensagens = ({ navigation }) => {
	const route = useRoute();
	const { idLogin } = useAuth();
	const { chatId, nome } = route.params || {};
	const [mensagens, setMensagens] = useState([]);
	const [inputEnviarMensagem, setInputEnviarMensagem] = useState("");
	const [error, setError] = useState(null);
	const scrollViewRef = useRef(null);

	const fetchMensagens = async (chatId) => {
		try {
			const result = await verMensagens(chatId);
			if (result?.Mensagens?.length > 0) {
				setMensagens(result.Mensagens);
				setError(null);
			} else {
				setMensagens([]);
				setError("Nenhuma mensagem encontrada.");
			}
		} catch (err) {
			setError("Erro ao buscar mensagens.");
			console.error(err);
		}
	};
	const fetchEnviar = async () => {
		if (!inputEnviarMensagem.trim()) return;

		const infos = {
			IdChat: chatId,
			IdRemetente: idLogin,
			Mensagem: inputEnviarMensagem,
		};
		console.log(infos);
		try {
			await enviarMensagem(infos);
			setInputEnviarMensagem("");
			fetchMensagens(chatId);
		} catch (err) {
			console.error("Erro ao enviar mensagem:", err);
		}
	};

	useEffect(() => {
		const socket = io(API_BASE_URL);

		socket.on("atualizarChat", (novaMensagem) => {
			if (novaMensagem.chatId === chatId) {
				setMensagens((prevMensagens) => [
					...prevMensagens,
					novaMensagem,
				]);
			}
		});

		return () => {
			socket.disconnect();
		};
	}, [chatId]);

	useEffect(() => {
		scrollViewRef.current?.scrollToEnd({ animated: true });
	}, [mensagens]);

	useFocusEffect(
		React.useCallback(() => {
			fetchMensagens(chatId);
		}, [chatId])
	);

	return (
		<Container>
			<ContainerPrincipal>
				<ContentChat>
					<ButtonGoBack />
					<ContainerView>
						<ContainerImagem>
							<Imagem resizeMode="cover" />
						</ContainerImagem>
						<ContainerText>
							<TituloDescricao>{nome}</TituloDescricao>
						</ContainerText>
					</ContainerView>
				</ContentChat>
				<ContentMensagem>
					<ContainerMensagem ref={scrollViewRef}>
						{mensagens.map((mensagem, index) => (
							<BubbleMensage
								key={index}
								text={mensagem.Mensagem}
								isSender={mensagem.IdRemetente === idLogin}
							/>
						))}
					</ContainerMensagem>
					<ContainerEscrever>
						<Input
							value={inputEnviarMensagem}
							onChangeText={setInputEnviarMensagem}
							placeholder="Digite sua mensagem"
						/>
						<ButtonPrincipal onPress={fetchEnviar}>
							<Octicons
								name="paper-airplane"
								size={25}
								color="black"
							/>
						</ButtonPrincipal>
					</ContainerEscrever>
				</ContentMensagem>
			</ContainerPrincipal>
		</Container>
	);
};

export default ChatMensagens;
