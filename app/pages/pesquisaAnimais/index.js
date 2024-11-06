import React, { useState, useEffect } from "react";
import {
	Container,
	ContentView,
	TextoTitulo,
	CardAnimal,
	CardImagemAnimal,
	TextCard,
	ImagemAnimal,
	ContentCards,
	ButtonVerMais,
	TextoBotao,
} from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { animaisData } from "../../data/animais/data-animais";

function PesquisaAnimais() {
	const route = useRoute();
	const navigation = useNavigation();
	const [filteredAnimals, setFilteredAnimals] = useState(animaisData);
	const [itemsToShow, setItemsToShow] = useState(10);

	useEffect(() => {
		const searchText = route.params?.searchText || "";
		const results = animaisData.filter((animal) =>
			animal.nomePopular.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredAnimals(results);
	}, [route.params?.searchText]);

	const handleVerMais = () => {
		setItemsToShow(itemsToShow + 10);
	};

	const handleAnimalClick = (animal) => {
		navigation.navigate("AnimalDetalhes", { animal });
	};

	return (
		<Container>
			<ContentView>
				<TextoTitulo>sugestões para você!</TextoTitulo>
				<ContentCards>
					{filteredAnimals.slice(0, itemsToShow).map((animal) => (
						<CardAnimal key={animal.id} onPress={() => handleAnimalClick(animal)}>
							<CardImagemAnimal>
								<ImagemAnimal source={animal.imagem} resizeMode="cover" />
							</CardImagemAnimal>
							<TextCard>{animal.nomePopular}</TextCard>
						</CardAnimal>
					))}
				</ContentCards>
				{itemsToShow < filteredAnimals.length && (
					<ButtonVerMais onPress={handleVerMais}>
						<TextoBotao>Ver mais</TextoBotao>
					</ButtonVerMais>
				)}
			</ContentView>
		</Container>
	);
}

export default PesquisaAnimais;
