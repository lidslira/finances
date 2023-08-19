import React from 'react';
import * as S from './styles';

// import { Container } from './styles';

const HighlightCard: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Entradas</S.Title>
        <S.Icon name="arrow-up-circle" />
      </S.Header>
      <S.Footer>
        <S.Amount>R$ 1.400,55</S.Amount>
        <S.LastTransaction>Última entrada dia 13 de abril</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}

export default HighlightCard;