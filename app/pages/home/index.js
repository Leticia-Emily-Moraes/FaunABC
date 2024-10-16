import React from "react";
import {
	ContainerPP,
	ContainerConteudo,
	ContainerConteudo1,
	ContainerConteudo2,
	ButtonConteudo,
	ButtonConteudoGrande,
	ViewScroll,
	Title,
	Div,
} from "./style";
import "react-native-gesture-handler";

function Home() {
	return (
		<ContainerPP>
			<ViewScroll>
				<ContainerConteudo>
					<ContainerConteudo1>
						<Div>
							<Title>Sua área</Title>
							<ButtonConteudo />
						</Div>
						<Div>
							<Title>Ocorrências</Title>
							<ButtonConteudo />
						</Div>
					</ContainerConteudo1>
					<ButtonConteudoGrande />
					<ButtonConteudoGrande />
					<ButtonConteudoGrande />
				</ContainerConteudo>
				<ContainerConteudo2>
					<ButtonConteudoGrande />
					<ButtonConteudoGrande />
					<ButtonConteudoGrande />
				</ContainerConteudo2>
			</ViewScroll>
		</ContainerPP>
	);
}

export default Home;
