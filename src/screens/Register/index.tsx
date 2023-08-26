import React from 'react';
import { Alert, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../components/Forms/Input';
import InputForm from '../../components/Forms/InputForm';
import Button from '../../components/Forms/Button';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelectButton from '../../components/Forms/CategorySelectButton';
import CategorySelect from '../CategorySelect';

import * as S from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Preço é obrigatório'),
});

const Register: React.FC = () => {
  
  const { 
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formControll = control as unknown as Control<FieldValues, any>
  
  const [transactionType, setTransactionType] = React.useState('' as 'up' | 'down' | '');
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false);
  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Categoria',
  });

  const handleTransactionsTypeSelect = (type: 'up' | 'down') => () => {
    setTransactionType(type);
  }

  const handleOpenSelectCategoryModal = () => setCategoryModalOpen(true);
  const handleCloseSelectCategoryModal = () => setCategoryModalOpen(false);

  const handleRegister = (form: Partial<FormData>) => {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação.');
    if (category.key === 'category') return Alert.alert('Selecione a categoria da transação.');
    
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }
    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              name="name"
              control={formControll}
              placeholder="Nome"
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm 
              name="amount"
              control={formControll}
              placeholder="Preço"
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

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

            <CategorySelectButton 
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </S.Fields>

          <Button 
            title="Enviar" 
            onPress={handleSubmit(handleRegister)}
          />
        </S.Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export default Register;