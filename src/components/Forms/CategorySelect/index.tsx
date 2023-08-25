import React from 'react';

import* as S from './styles';

interface Props {
  title: string;
}

const CategorySelect: React.FC<Props> = ({
  title,
}) => {
  return (
    <S.Container>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down" />
    </S.Container>

    )
}

export default CategorySelect;