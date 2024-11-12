import React, { useState, useEffect, useCallback } from "react";
import { AccordionOffline, IconeFolha, Button } from "../../components";
import { useFocusEffect } from "@react-navigation/native";
import { verAlertas } from "../../service/api/apiVerAlertas";
import {
	Container,
	ContainerButtons,
	ContainerPrincipal,
	ContentViewAlertas,
	ContentViewAjudasRapidas,
	ContainerDescricaoCard,
	ContainerImagemCard,
	ContainerCard,
	ContainerTextCard,
	TituloDescricao,
	TextoDescricao
} from "./style";

const AjudasRapidas = ({ route, navigation }) => {
	const [isAlertas, setIsAlertas] = useState(true);
	const [alertas, setAlertas] = useState([]);
	const [error, setError] = useState("");

	const fetchAlertas = async () => {
		const result = await verAlertas();
		if (result.error) {
			setError(result.error);
		} else if (Array.isArray(result) && result.length > 0) {
			setAlertas(result);
		} else {
			setAlertas([]);
			setError("Nenhum alerta registrado nos últimos 7 dias.");
		}
	};

	useEffect(() => {
		fetchAlertas();
	}, []);

	useFocusEffect(
		useCallback(() => {
			fetchAlertas();
		}, [])
	);

	return (
		<Container>
			<ContainerPrincipal>
				<ContainerButtons>
					<Button
						title="Alertas"
						onPress={() => setIsAlertas(true)}
						isActive={isAlertas === true}
					/>
					<Button
						title="Ajudas rápidas"
						onPress={() => setIsAlertas(false)}
						isActive={isAlertas === false}
					/>
				</ContainerButtons>

				<ContentViewAlertas isAlertas={isAlertas}>
					<Button
						title="Adicionar Alerta"
						onPress={() => navigation.navigate("CriarAlerta")}
						isActive={isAlertas === false}
					/>
					{error && <TituloDescricao>{error}</TituloDescricao>}
					{alertas.map((alerta, index) => (
						<ContainerCard key={index}>
							<ContainerImagemCard>
								{/* Exibir imagem do alerta se houver */}
							</ContainerImagemCard>
							<ContainerTextCard>
								<ContainerDescricaoCard>
									<TituloDescricao>
										{alerta.Titulo}
									</TituloDescricao>
								</ContainerDescricaoCard>
								<ContainerDescricaoCard>
									<TextoDescricao>
										{alerta.Cidade}
									</TextoDescricao>
								</ContainerDescricaoCard>
								<ContainerDescricaoCard>
									<TextoDescricao>
										{alerta.DataPublicacao}
									</TextoDescricao>
								</ContainerDescricaoCard>
							</ContainerTextCard>
						</ContainerCard>
					))}
				</ContentViewAlertas>

				<ContentViewAjudasRapidas isAlertas={isAlertas}>
					<AccordionOffline
						title="Picadas"
						textAccordion="Lavar o local da picada com água e sabão; não fazer torniquete ou garrote, não furar, cortar, queimar, espremer ou fazer sucção no local da ferida..."
					/>
					<IconeFolha />
					<AccordionOffline
						title="Mordidas"
						textAccordion="Você deve cuidar da sua ferida e depois obter ajuda; lave a ferida com bastante água e sabão; não coloque álcool, iodo ou qualquer outro tipo de antisséptico na ferida..."
					/>
					<IconeFolha />
					<AccordionOffline
						title="Bicadas"
						textAccordion="Você deve cuidar da sua ferida e depois obter ajuda; lave a ferida com bastante água e sabão; não coloque álcool, iodo ou qualquer outro tipo de antisséptico na ferida..."
					/>
					<IconeFolha />
					<AccordionOffline
						title="Precauções"
						textAccordion="Em caso de contato acidental, mordedura, lambedura ou arranhadura por mamíferos, lave o local atingido com água corrente e sabão, e procure imediatamente assistência médica..."
					/>
				</ContentViewAjudasRapidas>
			</ContainerPrincipal>
		</Container>
	);
};

export default AjudasRapidas;
