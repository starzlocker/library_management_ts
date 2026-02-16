import { Button } from '../Button/Button';
import styles from './_.module.scss';

type Props = {
  openLoginForm: () => void
}

export const UserRegistrationForm = ({openLoginForm}: Props) => {
  return (
    <section className={styles['registration-container']}>
      <h2>Cadastro</h2>
      <p>Preencha os campos abaixos para se cadastrar:</p>
      <form>
        <div className={styles['input-field']}>
          <label htmlFor='firstname'>Primeiro Nome</label>
          <input type='firstname' id='firstname' required />
        </div>
        <div className={styles['input-field']}>
          <label htmlFor='lastname'>Sobrenome</label>
          <input type='lastname' id='lastname' required />
        </div>
        <div className={styles['input-field']}>
          <label htmlFor='cpf'>CPF</label>
          <input type='cpf' id='cpf' required />
        </div>
        <div className={styles['input-field']}>
          <label htmlFor='gov_password'>Senha do GOV</label>
          <input type='gov_password' id='gov_password' required />
        </div>
        <div className={styles['input-field']}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={styles['input-field']}>
          <label htmlFor='password'>Senha</label>
          <input type='password' id='password' required />
        </div>
      </form>
      <Button kind='primary' onClick={() => {}} className={styles['return-button']}>
        Cadastrar
      </Button>
      <Button kind='secondary' onClick={() => openLoginForm()} className={styles['return-button']}>
        Voltar
      </Button>
    </section>
  );
};
