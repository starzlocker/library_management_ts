import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './_.module.scss';
import z from 'zod';
import { UserCreateDTOSchema, type UserCreateDTO } from '@/dtos/UserCreateDTO';
import { useRegisterUser } from '@/hooks/useRegisterUser';
type Props = {
    openLoginForm: () => void;
};

type FormErrors = {
    firstName?: Array<string>;
    lastName?: Array<string>;
    cpf?: Array<string>;
    email?: Array<string>;
    password?: Array<string>;
};

const formFields: Array<{
    id: number;
    field: keyof FormErrors;
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
    const { register, isLoading, isError, isSuccess } = useRegisterUser();

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formDataJson = Object.fromEntries(formData.entries());
        const result = UserCreateDTOSchema.safeParse(formDataJson);
        if (!result.success) {
            const errors = z.treeifyError(result.error);
            const output: FormErrors = {};
            for (const k in errors.properties) {
                const typedKey = k as keyof FormErrors;
                output[typedKey] = errors.properties?.[typedKey]?.errors;
            }

            setFormErrors(output ?? {});
        }

        await register(result.data as UserCreateDTO);
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
                            data-error={
                                formErrors[field.field] ? true : undefined
                            }
                        >
                            <label htmlFor={field.field}>{field.text}</label>
                            <input
                                type={field.field}
                                id={field.field}
                                name={field.field}
                            />
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
                    type="submit"
                    kind="primary"
                    className={styles['return-button']}
                    disabled={isSuccess || isLoading}
                >
                    Cadastrar
                </Button>
            </form>
            {isSuccess && <p>Cadastrado com sucesso!</p>}
            {isError && <p>Algo deu errado ao cadastrar</p>}
            {isLoading && <p>Aguarde</p>}
            <Button
                kind="secondary"
                onClick={() => openLoginForm()}
                className={styles['return-button']}
            >
                Voltar
            </Button>
        </section>
    );
};
