export const useAuth = async () => {
  const login = async (email: string, password: string) => {
    try {
      await GqlLogin({ email, password });
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    try {
      await GqlLogout();
    } catch (err) {
      throw err;
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      await GqlRegister({ email, username, password });
    } catch (err) {
      throw err;
    }
  };

  return {
    register,
    login,
    logout,
  };
};
