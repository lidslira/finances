import React from 'react';

import * as S from './styles';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

const Register: React.FC = () => {
const [transactionType, setTransactionType] = React.useState('' as 'up' | 'down' | '');

  const handleTransactionsTypeSelect = (type: 'up' | 'down') => () => {
    setTransactionType(type);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionsTypes>
            <TransactionTypeButton 
              type='up'
              title="Income" 
              onPress={handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Outcome" 
              type='down' 
              onPress={handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </S.TransactionsTypes>

        </S.Fields>

        <Button title="Enviar" />
      </S.Form>

    </S.Container>
  );
}

export default Register;