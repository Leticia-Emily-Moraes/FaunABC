import React from 'react';
import LogoImg from '../../assets/imgs/Logo.png';
import { LogoImagem } from './style';

function Logo({size = 250}) {
  return (
    <LogoImagem 
    resizeMode="contain"
    source={LogoImg}
    size={size}
    />
  );
}

export default Logo;
