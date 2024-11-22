import React, { useState, useEffect } from "react";
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
import { verMensagens } from "../../service/api/ApiVerMensagens";

const ChatMensagens = ({ navigation }) => {
	const route = useRoute();
	const { idLogin } = useAuth();
	const { chatId, nome } = route.params || {};
	const [mensagens, setMensagens] = useState([]);
	const [error, setError] = useState(null);

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

	useEffect(() => {
		fetchMensagens(chatId);
	}, [chatId]);

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
						<ContainerMensagem>
						{mensagens.map((mensagem, index) => (
							<BubbleMensage
								key={index}
								text={mensagem.Mensagem}
								isSender={mensagem.IdRemetente === idLogin}
							/>
						))}
						</ContainerMensagem>
						<ContainerEscrever>
							<Input />
							<ButtonPrincipal>
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
