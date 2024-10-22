import React from "react";
import { Container, ContainerComDoisBlocos, ContainerScroll } from "./style";
import { ContainerComClick } from "../../components";
import "react-native-gesture-handler";

function Home() {
	return (
		<ContainerScroll>
			<Container>
				<ContainerComDoisBlocos>
					<ContainerComClick
						altura={"200px"}
						largura={"50%"}
						titulo={"sua área"}
					></ContainerComClick>
					<ContainerComClick
						altura={"200px"}
						largura={"50%"}
						titulo={"Ocorrências"}
					></ContainerComClick>
				</ContainerComDoisBlocos>
				<ContainerComClick
					altura={"200px"}
					largura={"100%"}
					titulo={"chat"}
				></ContainerComClick>
				<ContainerComClick
					altura={"200px"}
					largura={"100%"}
					titulo={"animais"}
				></ContainerComClick>
			</Container>
		</ContainerScroll>
	);
}

export default Home;
