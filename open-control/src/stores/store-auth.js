import { defineStore } from 'pinia';
import users from 'src/constants/mock/users';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthed: false,
    loading: false,
  }),

  actions: {
    login(email, password, throttling = 0) {
      this.loading = true;

      this.user = users.find((user) => user.email === email);

      /*
       * log into the first user even if email is incorrect
       * remember, it's just a plug
       */
      if (!this.user) {
        this.user = users[0];
      }

      localStorage.setItem('user', JSON.stringify(this.user));
      this.isAuthed = true;

      this.loading = false;
    },

    auth() {
      /*
       * here could be a request to the back to check users credentials for being valid
       * for example using token stored in local storage
       * remember, it's just a plug
       */
      const storedUser = localStorage.getItem('user');

      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.isAuthed = true;
      } else {
        this.isAuthed = false;
      }
    },

    updateUser(user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    },

    logout() {
      this.user = null;
      this.isAuthed = false;
      localStorage.removeItem('user');
    },
  },
});
