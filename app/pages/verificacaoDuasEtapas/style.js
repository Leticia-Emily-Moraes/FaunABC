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
  gap: 25px;
`;

export const ContainerMenor = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
`;

export const TextoNormal = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Inter-Bold';
  font-size: ${(props) => props.theme.fontsSize.textoNormal};
  width: 80%;
  text-align: center;
`;

export const TextoTitulo = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Inter-Bold';
  font-size: ${(props) => props.theme.fontsSize.textoTitulo};
  width: 80%;
  text-align: center;
`;

export const TextoMenosEnface = styled.Text`
  color: #537552;
  font-family: 'Inter-Regular';
  font-size: ${(props) => props.theme.fontsSize.textoMenor};
`;

export const TextError = styled.Text`
	color: #FF0000;
	font-family: "Inter-Regular";
	font-size: ${(props) => props.theme.fontsSize.textoMenor};
`;