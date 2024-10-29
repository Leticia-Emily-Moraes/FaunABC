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
							imagem={require('../../assets/imgs/imgsHome/img1_tcc.png')}
						></ContainerComClick>
						<ContainerComClick
							altura={"200px"}
							largura={"50%"}
							titulo={"Ocorrências"}
							imagem={require('../../assets/imgs/imgsHome/img2_tcc.jpg')}
							/*destino="CriarAlerta"*/
						></ContainerComClick>
					</ContainerComDoisBlocos>
					<ContainerComClick
						altura={"200px"}
						largura={"100%"}
						titulo={"chat"}
						imagem={require('../../assets/imgs/imgsHome/img3_tcc.png')}
					></ContainerComClick>
					<ContainerComClick
						altura={"200px"}
						largura={"100%"}
						titulo={"animais"}
						imagem={require('../../assets/imgs/imgsHome/img4_tcc.png')}
					></ContainerComClick>
				</Container>
			</ContainerScroll>
		);
	}

	export default Home;
