import type { UserCreateDTO } from '@/dtos/UserCreateDTO';
import { useCallback, useEffect, useState } from 'react';

export const useRegisterUser = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = `${import.meta.env.VITE_BACKEND}/auth/signup`;

  const register = useCallback(async (payload: UserCreateDTO) => {
    try {
      setIsSuccess(false);
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Não foi possível registrar o usuário');
      }

      const createdId = await response.json();

      if (createdId) {
        setIsSuccess(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    register,
    isSuccess,
    isError,
    isLoading,
  };
};
