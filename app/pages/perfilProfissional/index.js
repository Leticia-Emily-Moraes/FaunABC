import React from "react";
import { Container } from "../escolhaPerfil/style";
import Logo from "../../components/logoPadrao";
import Avatar from "../../components/elementosPagPerfil/avatar";


function PerfilProfissional () {
    return(
        <Container>
            <Avatar/>
            <Text>Esse é o perfil Profissional</Text>
        </Container>
    )

};

export default PerfilProfissional ;