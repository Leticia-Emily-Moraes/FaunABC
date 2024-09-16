import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 50px 10px;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ContainerText = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const TextoNormal = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Inter-Regular';
  font-size: ${(props) => props.theme.fontsSize.textoNormal};  text-align: center;
`;

export const TextoTitulo = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Inter-Bold';
  font-size: ${(props) => props.theme.fontsSize.textoTitulo};  text-align: center;
`;

