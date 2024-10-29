import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { ContainerBandeirinha } from "./style";

function Bandeirinha () {
    return(
        <ContainerBandeirinha>
            <Feather 
            name="bookmark"
            size={30} 
            color="black" />
        </ContainerBandeirinha>
    );
};

export default Bandeirinha;