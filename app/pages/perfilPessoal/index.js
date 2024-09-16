import React from "react";
import { Container } from "../escolhaPerfil/style";
import Logo from "../../components/logoPadrao";
import Avatar from "../../components/avatar";


function PerfilPessoal () {
    return(
        <Container>
            <Avatar/>
            <Text>Esse é o perfil pessoal</Text>
        </Container>
    )

};

export default PerfilPessoal;