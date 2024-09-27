import React, { useContext } from "react";
import { Container, TextoGrande, ContainerButton } from "./style";
import { PerfilContext } from "../../context/perfilContext";
import { Button, RadioButton, LogoPadrao} from "../../components"

function EscolhaPerfil({ navigation }) {
	const { perfil, setPerfil } = useContext(PerfilContext);

	const handleCaminhoCadastro = () => {
		if (perfil === 1) {
            navigation.navigate("CadastroDadosUser");
		} else if (perfil === 2) {
            navigation.navigate("CadastroDadosOng");
		} else {
            navigation.navigate("CadastroDadosUser");
		}
	};

	return (
		<Container>
			<LogoPadrao />
			<TextoGrande>Escolha o tipo de perfil para cadastro</TextoGrande>
			<RadioButton
				options={[
					{ label: "Pessoal", value: 1 },
					{ label: "ONG", value: 2 },
					{ label: "Profissional", value: 3 },
				]}
				valorCheckado={perfil}
				onChange={setPerfil}
			/>
			<Button title="Continuar" onPress={handleCaminhoCadastro}/>
		</Container>
	);
}

export default EscolhaPerfil;
