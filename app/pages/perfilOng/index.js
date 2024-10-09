import React from "react";
import { Text } from "react-native";
import { Container } from "../escolhaPerfil/style";
import Logo from "../../components/logoPadrao";
import Avatar from "../../components/avatar";


function PerfilOng() {
    return(
        <Container>
            <Avatar/>
            <Text>Esse é o perfil de Ong</Text>
        </Container>
    )

};

export default PerfilOng ;