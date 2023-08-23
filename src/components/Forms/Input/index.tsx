import React from 'react';
import * as S from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

const Input: React.FC<Props> = ({...rest}) => {
  return <S.Container {...rest} />;
}

export default Input;