import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import classes from './MyTestForm.module.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formDataSchema = yup.object().shape({
  email: yup.string()
    .typeError('Не строка!')
    .required('Обязательно для заполнения!')
    .email('Не похоже на email!'),
  password: yup
    .string()
    .required('Обязательно для заполнения!')
    .min(6, 'Минимальная длина пароля: 6 символов'),
  age: yup
    .number()
    .typeError('Не число!')
    .positive('Должно быть положительным числом!')
    .integer('Должно быть целое число!'),
});

export default function MyTestForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formDataSchema),
    mode: 'onChange',
  });

  const customSendData = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(customSendData)}>
      <h1 className={classes.header}>Моя первая форма на хуках</h1>

      <label htmlFor="email">
        <input type="text" id={'email'} name={'email'} ref={register} />
        {errors.email?.message}
      </label>

      <label htmlFor="password">
        <input
          type="password"
          id={'password'}
          name={'password'}
          ref={register}
        />
        {errors.password?.message}
      </label>

      <label htmlFor="age">
        <input type="text" id={'age'} name={'age'} ref={register} />
        {errors.age?.message}
      </label>

      <button type={'submit'}>Отправить!</button>
    </form>
  );
}
