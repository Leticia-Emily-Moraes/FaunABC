import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { AccordionOffline, IconeFolha, Button } from "../../components";
import {
	Container,
	ContainerButtons,
	ContainerPrincipal,
	ContentViewAlertas,
	ContentViewAjudasRapidas,
	Title,
	AlertContainer,
	AlertTitle,
} from "./style";

const AjudasRapidas = ({ route }) => {
	const [isAlertas, setIsAlertas] = useState(true);
	const [alertas, setAlertas] = useState([]);

	useEffect(() => {
		if (route.params) {
			const { titulo, subtitulo } = route.params;
			setAlertas((prevAlertas) => [
				...prevAlertas,
				{ titulo, subtitulo },
			]);
		}
	}, [route.params]);

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
					<Text style={Title}>Lista de Alertas</Text>
					<FlatList
						data={alertas}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<View style={AlertContainer}>
								<Text style={AlertTitle}>{item.titulo}</Text>
								<Text>{item.subtitulo}</Text>
							</View>
						)}
					/>
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
