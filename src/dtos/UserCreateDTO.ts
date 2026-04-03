import z from 'zod';

export const UserCreateDTOSchema = z.strictObject({
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

export type UserCreateDTO = z.Infer<typeof UserCreateDTOSchema>;
