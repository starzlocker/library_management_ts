import { Button } from '../Button/Button';
import styles from './_.module.scss'

type Props = {
  openSignUpForm: () => void
}

export const UserLoginForm = ({openSignUpForm}:Props) => {
  return (
    <>
      <section className={styles['login-container']}>
        <h2>Já é cliente?</h2>
        <p>Digite seu email e senha para entrar:</p>
        <form>
          <div className={styles['input-field']}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={styles['input-field']}>
            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' required />
          </div>
        </form>
      </section>
      <section>
        <h2>Novo por aqui?</h2>
        <Button kind='primary' onClick={() => openSignUpForm()}>
          Cadastre-se
        </Button>
      </section>
    </>
  );
};
