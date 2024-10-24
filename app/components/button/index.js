import React from 'react';
import { ButtonPrincipal, ButtonText } from './style';

function Button({ title, onPress, isFull, isActive = false, height }) {
  return (
    <ButtonPrincipal onPress={onPress} isFull={isFull} isActive={isActive}>
      <ButtonText isActive={isActive}>{title}</ButtonText>
    </ButtonPrincipal>
  );
}

export default Button;
