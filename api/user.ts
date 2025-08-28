import apiClient from './config';

export const signupUser = async(username: string, email: string, password: string) => {
  try {
    const response = await apiClient.post('/user/signup', {
      username,
      email,
      password,
    });
    return response.data;
  } catch(error) {
    throw new Error("Failed to signup user");
  }
}