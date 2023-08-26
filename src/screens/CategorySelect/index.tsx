import React from 'react';
import { FlatList } from 'react-native';

import { categories } from '../../utils/categories';
import Button from '../../components/Forms/Button';

import * as S from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
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
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title="Selecionar" onPress={closeSelectCategory}/>
      </S.Footer>
      
    </S.Container>
  )
}

export default CategorySelect;