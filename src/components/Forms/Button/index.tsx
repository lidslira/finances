import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({title, ...rest}) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );  
}

export default Button;