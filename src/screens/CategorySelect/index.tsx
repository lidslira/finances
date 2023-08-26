import React from 'react';

import { categories } from '../../utils/categories';
import * as S from './styles';
import { FlatList } from 'react-native';
import Button from '../../components/Forms/Button';

interface Category {
  key: string;
  name: string;
}

interface CategoryProps extends Category{
  icon: string;
  color: string;
}

interface Props {
  category: string;
  setCategory: (name: Category) => void;
  closeSelectCategory: () => void;
}
const CategorySelect: React.FC<Props> = ({
  category,
  setCategory,
  closeSelectCategory,
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={categories}
        keyExtractor={(item: CategoryProps) => item.key}
        renderItem={({ item }) => (
          <S.Category>
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title="Selecionar" />
      </S.Footer>
      
    </S.Container>
  )
}

export default CategorySelect;