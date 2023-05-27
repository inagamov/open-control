import { defineStore } from 'pinia';
import entrepreneurs from 'src/constants/mock/users/entrepreneurs';
import inspectors from 'src/constants/mock/users/inspectors';

const users = [...entrepreneurs, ...inspectors];

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
  }),
  actions: {
    login(login, password) {
      this.loading = true;

      setTimeout(() => {
        this.user = users.find((user) => user.email === login);

        if (!this.user) {
          this.user = users[0];
        }

        localStorage.setItem('user', JSON.stringify(this.user));

        this.loading = false;

        return this.user;
      }, 1000);
    },

    logout() {
      this.user = null;
      localStorage.removeItem('user');
    },
  },
});
