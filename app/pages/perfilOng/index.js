import React from "react";
import { Container } from "./style";
import SetaEsquerda from "../../components/elementosPagPerfil/iconSetaEsquerda";
import { Avatar } from "../../components";
import { Bandeirinha }from "../../components";
import { ContainerTop } from "./style";
import { ContainerAvatarFoto } from "./style";
import { Text16 } from "./style";
import {DivArredondada} from "../../components/elementosPagPerfil/divArredondada"

function PerfilOng() {
    return (
        <Container>
            <ContainerTop>
            <SetaEsquerda/>
            <Bandeirinha/>
            </ContainerTop>
            <ContainerAvatarFoto>
            <Avatar/>
            </ContainerAvatarFoto>
            <Text16>Nome do usuário</Text16>
        </Container>
    );
};

export default PerfilOng ;