import styled from "styled-components/native";

export const LinkContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled.Text`
  color: ${(props) => props.theme.colors.textLink};
  font-family:'Inter-Bold';
  font-size: ${(props) => props.fontSize}px;
`;
