import React from 'react';

import * as S from './styles';
import HighlightCard from '../../components/HighlightCard';

export default function App() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.UserPhoto source={{uri: 'https://xesque.rocketseat.dev/users/avatar/profile-aff8f5ed-da41-463c-a0f3-cfed3bf7a18f-1649538667225.jpg'}}/>
            <S.User>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Ana</S.UserName>
            </S.User>
          </S.UserInfo>
        <S.Icon name="power"/>
        </S.UserWrapper>
      </S.Header>
      <S.HighlightCards>
        <HighlightCard 
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </S.HighlightCards>
    </S.Container>
  );
}
