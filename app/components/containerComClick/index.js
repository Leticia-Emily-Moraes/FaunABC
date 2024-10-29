import React from "react";
import { Principal, ButtonWrapper, ButtonContainer, TextTitulo } from "./style";
import { View, Image, StyleSheet  } from "react-native";
/*import { useNavigation } from '@react-navigation/native';*/

function ContainerComClick({ altura, largura, titulo, navigate,imagem /*destino*/}) {


	/*const navigation = useNavigation();

	const handleClick = () => {
		navigation.navigate(destino);
	};*/
	return (
		<Principal altura={altura} largura={largura} /*onClick={handleClick}*/>
			<TextTitulo>{titulo}</TextTitulo>
			<ButtonWrapper>
			{imagem && <Image source={imagem} style={styles.image} />}
				<ButtonContainer onPress={navigate}>
					<View />
				</ButtonContainer>
			</ButtonWrapper>
		</Principal>
	);
}

const styles = StyleSheet.create({
	image: {
		position: 'absolute', // Coloca a imagem ao fundo
		width: '100%',        // Faz a imagem preencher a largura do contêiner
		height: '100%',       // Faz a imagem preencher a altura do contêiner
		borderRadius: 10,     // Aplica o borderRadius como no ButtonWrapper
		resizeMode: 'cover',  // Mantém a proporção da imagem
	},
});

export default ContainerComClick;
