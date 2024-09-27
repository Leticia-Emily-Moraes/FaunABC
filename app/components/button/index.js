import React from 'react';
import { ButtonPrincipal, ButtonText } from './style';

function Button({ title, onPress, isFull }) {
  return (
    <ButtonPrincipal onPress={onPress} isFull={isFull}>
      <ButtonText>{title}</ButtonText>
    </ButtonPrincipal>
  );
}

export default Button;
