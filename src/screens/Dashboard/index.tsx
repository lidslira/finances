import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as S from './styles';

export default function App() {
  return (
    <S.Container>
      <StatusBar style="auto" />
      <S.Header>
        <S.UserInfo>
          <S.UserPhoto source={{uri: 'https://xesque.rocketseat.dev/users/avatar/profile-aff8f5ed-da41-463c-a0f3-cfed3bf7a18f-1649538667225.jpg'}}/>
          <S.User>
          <S.UserGreeting>Olá,</S.UserGreeting>
          <S.UserName>Ana</S.UserName>
          </S.User>
        </S.UserInfo>

        <S.Icon name="power"/>
      </S.Header>
    </S.Container>
  );
}
