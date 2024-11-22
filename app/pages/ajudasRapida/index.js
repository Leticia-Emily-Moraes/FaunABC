import React, { useState, useEffect, useCallback } from "react";
import { IconeFolha, Button, AccordionOnline } from "../../components";
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
	TextoDescricao,
	TextoAlerta,
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
			setError(null);
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
					{error && <TextoAlerta>{error}</TextoAlerta>}
					{alertas.map((alerta, index) => (
						<ContainerCard key={index}>
							<ContainerImagemCard></ContainerImagemCard>
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
					<AccordionOnline
						height="1400"
						title="Picada de escorpião"
						localSocorro="Hospital Geral do Grajaú Prof. Liber John Alphonse Di Dio, Rua Francisco Octavio Pacca, 180 - Parque das Nações, (11) 3544-9444"
						naoFazer="Não cortar, furar, nem apertar o local da picada , não garrotear,Jamais “sugar” o local da  picada, Não passar nada no local da picada (álcool, pomadas, café… etc)"
						deveFazer="*Somente faça esses procedimentos se não for atrasar a ida ao hospital!*, Se possível, levar o animal ou uma foto para identificação da espécie,Faça compressas com água morna,Limpar o local da picada com água e sabão pode ajudar,Se necessário ligue para o SAMU (192), principalmente se a vítima for criança ou idosa."
						sintomas="Causa uma dor intensa no local com irradiação pelo membro afetado. A sensação é de queimação, agulhada e latejamento. A picada é semelhante ao de uma vespa ou abelha, ficando inchada e avermelhada. Geralmente as picadas ocorrem nos membros superiores"
					/>
					<IconeFolha />
					<AccordionOnline
					height="1000"
						title="Picada de Jararaca"
						localSocorro="Hospital Municipal de Guarulhos Avenida Tiradentes, 3392 - Bom Clima , (11) 2475-7449 "
						naoFazer="Não  ingerir álcool, não fazer torniquete, Jamais “sugar” o local da  picada "
						deveFazer="*ficar deitado e elevar o membro que levou a picada, tirar foto do animal se possível,limpar o local da picada com água e sabão pode ajudar,Se necessário ligue para o SAMU (192), principalmente se a vítima for criança ou idosa."
						sintomas="Dor e inchaço local, às vezes com manchas arroxeadas e sangramento no ferimento. Também podem ocorrer sangramentos em mucosas, como nas gengivas e nariz."
					/>
					<IconeFolha />
					<AccordionOnline
					height="900"
						title="Picada de Cobra   coral"
						localSocorro="Hospital Municipal de Guarulhos Avenida Tiradentes, 3392 - Bom Clima , (11) 2475-7449 "
						naoFazer="Não  ingerir álcool, não fazer torniquete, Jamais “sugar” o local da  picada "
						deveFazer="*ficar deitado e elevar o membro que levou a picada, tirar foto do animal se possível,limpar o local da picada com água e sabão pode ajudar,Se necessário ligue para o SAMU (192), principalmente se a vítima for criança ou idosa."
						sintomas="os primeiros sintomas são dormência no local, visão turva e dificuldade na fala."
					/>
					<IconeFolha />
					<AccordionOnline
					height="1350"
						title="Picada de Aranha Armadeira"
						localSocorro="Hospital Municipal de Guarulhos Avenida Tiradentes, 3392 - Bom Clima , (11) 2475-7449 "
						naoFazer="Não tampe ou faça torniquete (pode piorar a situação ao invés de preservar); não fazer torniquete e jamais “sugar” o local da  picada "
						deveFazer="Lave bem o local;Se possível, mate a aranha e coloque-a em um frasco com álcool (para preservar);Vá imediatamente a um hospital (se possível, especializado) e leve o animal para mostrar ao médico;Enquanto não consegue atendimento, mantenha o membo onde foi a picada elevado, para diminuir a circulação sanguínea no local;Se necessário ligue para o SAMU (192), principalmente se a vítima for criança ou idosa."
						sintomas="Dor e inchaço local, às vezes com manchas arroxeadas e sangramento no ferimento. Também podem ocorrer sangramentos em mucosas, como nas gengivas e nariz."
					/>
					<IconeFolha />
				</ContentViewAjudasRapidas>
			</ContainerPrincipal>
		</Container>
	);
};

export default AjudasRapidas;
