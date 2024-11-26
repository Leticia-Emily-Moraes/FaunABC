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
	ImagemCard,
} from "./style";
import Atropelamento from "../../assets/imgsAlerta/alertaAtropelamento.jpg";
import Epidemia from "../../assets/imgsAlerta/alertaEpidemia.jpg";
import Epoca from "../../assets/imgsAlerta/alertaEpoca.jpg";
import Pista from "../../assets/imgsAlerta/alertaRecorenciaDeAnimais.jpg";

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
		}, []),
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
							<ContainerImagemCard>
								<ImagemCard
									source={
										alerta.TipoDoAlerta == "Atropelamento"
											? Atropelamento
											: alerta.TipoDoAlerta == "SurtoEpidemiologico"
												? Epidemia
												: alerta.TipoDoAlerta == "Epoca"
													? Epoca
													: Pista
									}
								/>
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
					<AccordionOnline
						height="1350"
						title="Picada de aranha marrom"
						localSocorro="Hospital Vital Brazil Avenida Vital Brasil, 1500 - Instituto Butantan - (11) 2627-9529"
						naoFazer="Não sugue o veneno, não faça torniquete."
						deveFazer="Lavar o local da picada;
						Usar compressas mornas pois ajudam no alívio da dor; 
						Elevar o local da mordida;
						Procurar o serviço médico mais próximo;Quando possível, levar o animal para identificação."
						sintomas="Inicia com dor discreta após picada e regride rápido, após 8 horas a dor em queimação reaparece juntamente com edema e eritema. O pico da piora é entre 24 e 72 horas, podendo ter também astenia, febre, cefaléia, mialgia, náusea, vômito, tontura. Após um certo momento pode haver mancha rosa no local da picada"
					/>
					<IconeFolha />
					<AccordionOnline
						height="1350"
						title="Contato com lagarta venenosa"
						localSocorro="Hospital Municipal de Guarulhos,Avenida Tiradentes, 3392 - Bom Clima"
						naoFazer="Não fazer torniquete ou garrote, furar, cortar, queimar, espremer, fazer sucção no local da ferida e nem aplicar folhas, pó de café ou terra sobre ela, para não provocar infecção."
						deveFazer="algumas coisas podem ser feitas para reduzir ou tratar os efeitos de queimadura por lagarta, como  lavar o local queimado com água corrente e realizar compressas com gelo. É importante considerar levar o indivíduo imediatamente ao serviço de saúde mais próximo para receber avaliações sobre a possível coagulação do sangue."
						sintomas="dor imediata (queimação), irradiada para o membro, com área de eritema e edema na região do contato."
					/>
					<IconeFolha />
					<AccordionOnline
						height="1350"
						title="Picada de abelha ou marimbondo"
						localSocorro="Local não encontrado, ligue para o SAMU para informações mais seguras."
						naoFazer="Não use pinça, pois pode “quebrar” o ferrão com parte dele dentro do corpo."
						deveFazer="Raspar suavemente um objeto rombo, como um cartão de crédito ou faca de manteiga, sobre a área afetada é a melhor maneira de se livrar do ferrão. Evite usar pinças ou qualquer outra coisa que possa perfurar ou espremer a bolsa de veneno e piorar os sintomas e eleve a área. Em caso de emergência, contate imediatamente o Serviço de Atendimento Móvel de Urgência (SAMU 192) ou o Corpo de Bombeiros (193)."
						sintomas="Uma sensação de mal-estar, formigamento e tontura, coceira generalizada e urticária, inchaço dos lábios ou da língua, dificuldade para respirar e sibilos, perda de consciência e colapso."
					/>
					<IconeFolha />
					<AccordionOnline
						height="1350"
						title="Picada de Barbeiro"
						localSocorro="11 5085-6000, Av. Dr. Dante Pazzanese, 500 - Vila Mariana, São Paulo - SP - CEP: 04012-909"
						naoFazer="Não se deve tentar matar ou esmagar o inseto, porque isso pode aumentar o risco de infecção.  Em lugar disso, é indicado pegá-lo com cuidado, protegendo as mãos com luva ou saco plástico e colocar em um pote fechado para entregar no PIT mais próximo ou para um agente de endemias ou de saúde da localidade."
						deveFazer="Leve o inseto para o hospital especializado para eles confirmarem se é o transmissor da doença de chagas. Vá o mais rápido possível ao cardiologista para fazer uma sorologia para doença de Chagas ou procure uma unidade de saúde mais próxima pois todo o diagnóstico e tratamento são ofertados pelo SUS."
						sintomas="Febre persistente,dor de cabeça, fraqueza,inchaço no rosto e nas pernas e vermelhidão na pele. A maioria das pessoas, logo que adquire doença de Chagas, não tem sinais, nem sintomas. Mesmo assim, pode estar doente."
					/>
					<IconeFolha />
					<AccordionOnline
						height="1350"
						title="Picada de Lacraia"
						localSocorro="Local não encontrado, ligue para o SAMU para informações mais seguras."
						naoFazer="Não beba álcool e  não faça torniquete."
						deveFazer="Deve-se lavar o local da picada com água corrente e sabão neutro. É sempre bom procurar orientação médica. Mantenha o local da picada o mais limpo possível."
						sintomas="Dor forte e inchaço (edema) no local da picada."
					/>
					<IconeFolha />
					<AccordionOnline
						height="400"
						title="Aparição de Sapo Cururu"
						naoFazer="Não aperte as bochechas dele! Contêm toxinas."
						deveFazer="Com uma vassoura, afaste o sapo aos poucos como estivesse varrendo. O sapo pulará aos poucos, e você pode guia-lo em um local seguro."
					/>
					<IconeFolha />
					<AccordionOnline
						height="400"
						title="Aparição de Morcego"
						naoFazer="Nunca toque no animal com as mãos, isole-os com o auxilio de um balde ou caixa e ligue para a Vigilância.
						Caso você se depare com um morcego voando durante o dia ou que tenha adentrado sua casa, é crucial que você não toque no animal. Este morcego será recolhido, acondicionado corretamente e encaminho para análise no Instituto Pasteur, que é referência para investigação de casos de raiva."
						sintomas="A doença é transmitida por meio da saliva de animal contaminado, por isso é importante não tocar o animal e seguir as orientações."
					/>
					<IconeFolha />
					<AccordionOnline
						height="400"
						title="Colmeia em Casa"
						deveFazer="Quando constatada a presença de colmeia/vespeiro instalado em locais que representem risco à saúde da população, entrar em contato com o telefone da Central SP 156."
					/>
					<IconeFolha />
				</ContentViewAjudasRapidas>
			</ContainerPrincipal>
		</Container>
	);
};

export default AjudasRapidas;
