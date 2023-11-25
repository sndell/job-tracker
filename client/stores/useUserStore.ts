import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  return { user, setUser };
});
