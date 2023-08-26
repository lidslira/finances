import React from 'react';

import* as S from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CategorySelect: React.FC<Props> = ({
  title,
  onPress,
}) => {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down" />
    </S.Container>

    )
}

export default CategorySelect;