import React from 'react';
import * as S from './styles';

interface Props {
  title: string
  amount: string
  lastTransaction: string
  type: 'up' | 'down' | 'total'
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

const HighlightCard: React.FC<Props> = ({
  title,
  amount,
  lastTransaction,
  type
}) => {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type}/>
      </S.Header>
      <S.Footer>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}

export default HighlightCard;