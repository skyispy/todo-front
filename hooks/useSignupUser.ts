import { useMutation } from '@tanstack/react-query';
import { signupUser } from '../api/user';

export const useSignupUser = () => {
  const { mutateAsync, isSuccess, isError, error } = useMutation({
    mutationFn: ({ username, email, password }: { username: string; email: string; password: string }) =>
      signupUser(username, email, password),
  });

  return { mutateAsync, isSuccess, isError, error };
};