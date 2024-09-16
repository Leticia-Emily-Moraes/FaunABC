import styled from "styled-components";


export const InputSimples = styled.TextInput`
    width: 250px;
    height: 49px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.bgInput};
    margin-left: 25px;
    margin-right: 25px;
`;