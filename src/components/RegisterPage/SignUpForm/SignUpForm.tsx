import { InputField } from '@/components/misc/InputField/InputField';
import styles from './_.module.scss';
import { useRef } from 'react';
import { Button } from '@/components/misc/Button/Button';



export const SignUpForm = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);

  return (
    <form className={styles['form-container']}>
      SignUp Form
      <InputField ref={firstName} label='Primeiro Nome' id='first_name' name='firstName' onChange={() => {}}/>
      <InputField ref={lastName} label='Sobrenome' id='last_name' name='lastName' onChange={() => {}}/>
      <InputField ref={email} label='Email' id='email' name='email' onChange={() => {}}/>
      <InputField ref={phoneNumber} label='Celular' id='phone_number' name='phoneNumber' onChange={() => {}}/>

      <Button type='submit' role='submit' kind='primary' disabled={true} onClick={() => {}}>Cadastrar</Button>
    </form>
  );
};
