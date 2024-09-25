import React, { useState, useEffect } from "react";
import { Container, Input, Label } from "./style";

function InputPadrao({
    TituloDoInput = "Título",
    placeholder = "Digite aqui...",
    value = "",
    onChangeText = () => {},
    ...props
}) {
    const [text, setText] = useState(value);

    useEffect(() => {
        setText(value);
    }, [value]);
    const handleChange = (newText) => {
        setText(newText);
        onChangeText(newText);
    };

    return (
        <Container>
            {TituloDoInput !== "" && <Label>{TituloDoInput}</Label>}
            <Input
                placeholder={placeholder}
                value={text}
                onChangeText={handleChange}
                {...props}
            />
        </Container>
    );
}

export default InputPadrao;
