import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './_.module.scss';
import z from 'zod';
import type { KeyOf } from 'node_modules/zod/v4/core/util.d.cts';
type Props = {
  openLoginForm: () => void;
};

const validateSchema = z.strictObject({
  firstName: z
    .string({ error: 'Preencha o seu primeiro nome' })
    .min(1, { error: 'Preencha o seu primeiro nome' }),
  lastName: z
    .string({ error: 'Preencha seu último nome' })
    .min(1, { error: 'Preencha o seu primeiro nome' }),
  cpf: z
    .string({ error: 'Preencha com seu CPF (pode ser de mentirinha)' })
    .regex(/\d{11}/, { error: 'CPF deve ser composto por 11 digitos' }),
  email: z.email({ error: 'Preencha seu email' }),
  password: z
    .string({ error: 'Preencha sua senha' })
    .min(8, { error: 'A senha deve ter 8 digitos' }),
});

type FormErrors = {
  firstName?: Array<string>;
  lastName?: Array<string>;
  cpf?: Array<string>;
  email?: Array<string>;
  password?: Array<string>;
};

const formFields: Array<{
  id: number;
  field: KeyOf<FormErrors>;
  text: string;
}> = [
  { id: 1, field: 'firstName', text: 'Primeiro Nome' },
  { id: 2, field: 'lastName', text: 'Sobrenome' },
  { id: 3, field: 'cpf', text: 'CPF' },
  { id: 5, field: 'email', text: 'Email' },
  { id: 6, field: 'password', text: 'Password' },
];

export const UserRegistrationForm = ({ openLoginForm }: Props) => {
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataJson = Object.fromEntries(formData.entries());
    const result = validateSchema.safeParse(formDataJson);
    if (!result.success) {
      const errors = z.treeifyError(result.error);
      const output: FormErrors = {};
      for (const k in errors.properties) {
        const typedKey = k as KeyOf<FormErrors>;
        output[typedKey] = errors.properties?.[typedKey]?.errors;
      }

      setFormErrors(output ?? {});
    }

    console.log(result.data);
  };

  return (
    <section className={styles['registration-container']}>
      <h2>Cadastro</h2>
      <p>Preencha os campos abaixos para se cadastrar:</p>
      <form onSubmit={onSubmit}>
        {formFields.map((field) => (
          <div key={field.id}>
            <div
              className={styles['input-field']}
              data-error={formErrors[field.field] ? true : undefined}
            >
              <label htmlFor={field.field}>{field.text}</label>
              <input type={field.field} id={field.field} name={field.field} />
            </div>
            {formErrors[field.field] &&
              formErrors[field.field]?.map((error) => (
                <p className={styles['error-text']} key={error}>
                  {error}
                </p>
              ))}
          </div>
        ))}
        <Button
          type='submit'
          kind='primary'
          className={styles['return-button']}
        >
          Cadastrar
        </Button>
      </form>
      <Button
        kind='secondary'
        onClick={() => openLoginForm()}
        className={styles['return-button']}
      >
        Voltar
      </Button>
    </section>
  );
};
