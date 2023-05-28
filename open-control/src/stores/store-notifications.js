import { defineStore } from 'pinia';
import notifications from 'src/constants/mock/notifications';

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({ notifications: [], filter: 'all' }),

  actions: {
    loadNotifications() {
      let storedNotifications = localStorage.getItem('notifications');

      if (storedNotifications) {
        this.notifications = JSON.parse(storedNotifications);
      } else {
        localStorage.setItem('notifications', JSON.stringify(notifications));
        this.notifications = notifications;
      }
    },

    syncCompaniesStorage() {
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    },

    changeFilter(str) {
      this.filter = str;
      this.syncCompaniesStorage();
    },

    markAsRead() {
      this.notifications = this.notifications.map((item) => {
        if (!item.read_at) {
          item.read_at = new Date();
        }
        return item;
      });
      this.syncCompaniesStorage();
    },
  },
});
